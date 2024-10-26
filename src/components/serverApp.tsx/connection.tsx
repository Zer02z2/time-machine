import { useEffect, useRef, useState } from "react"
import { Dot } from "./dot"
import { useAnimate } from "framer-motion"
import { SmallText } from "../smallText"
import { Message } from "./message"

interface Props {
  isFetching: boolean
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  startTime: number | undefined
  receiveTime: number | undefined
  serverTime: number | undefined
}
export type DotColor = "yellow" | "green"

export const Connection = ({ props }: { props: Props }) => {
  const { isFetching, setIsFetching, startTime, serverTime, receiveTime } =
    props
  const [color, setColor] = useState<DotColor>("yellow")
  const [scope, animate] = useAnimate()

  const timeStamp = (millis: number) => {
    const date = new Date(millis)
    const UTCTime = date.toUTCString()
    const currentMillis = date.getMilliseconds()
    return `${UTCTime} ${currentMillis}ms`
  }

  const moveDot = async () => {
    if (!isFetching) return
    setColor("yellow")
    await animate(
      scope.current,
      { left: "auto", right: 0 },
      { duration: 0.7, ease: "easeInOut" }
    )
    setColor("green")
    await animate(
      scope.current,
      { left: 0, right: "auto" },
      { duration: 0.7, ease: "easeInOut" }
    )
    setColor("yellow")
    setIsFetching(false)
  }

  useEffect(() => {
    moveDot()
  }, [isFetching])

  return (
    <div className="relative flex-initial w-full">
      <div className="w-full border-b border-neutral-500 h-1/2">
        {startTime && (
          <Message
            time={timeStamp(startTime)}
            message="What time are you?"
            who="user"
          />
        )}
      </div>
      <div ref={scope} className="absolute left-0 translate-y-[-50%]">
        <Dot color={color} />
      </div>
      <div className="flex items-end w-full h-1/2">
        {!isFetching && receiveTime && serverTime && (
          <Message
            time={timeStamp(receiveTime)}
            message={timeStamp(serverTime)}
            who="server"
          />
        )}
      </div>
    </div>
  )
}
