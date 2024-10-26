import { useEffect, useState } from "react"
import { Dot } from "./dot"
import { useAnimate } from "framer-motion"
import { Message } from "./message"
import { AnimatePresence } from "framer-motion"

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
      <div className="flex flex-col justify-end w-full pb-12 border-b border-neutral-500 h-1/2">
        <AnimatePresence>
          {startTime && (
            <div key={startTime}>
              <Message
                time={timeStamp(startTime)}
                message="What time are you?"
                who="user"
              />
            </div>
          )}
        </AnimatePresence>
      </div>
      <div ref={scope} className="absolute left-0 translate-y-[-50%]">
        <Dot color={color} />
      </div>
      <div className="w-full pt-12 h-1/2">
        <AnimatePresence>
          {!isFetching && receiveTime && serverTime && (
            <Message
              time={timeStamp(receiveTime)}
              message={timeStamp(serverTime)}
              who="server"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export const timeStamp = (millis: number) => {
  const date = new Date(millis)
  const UTCTime = date.toUTCString()
  const currentMillis = date.getMilliseconds()
  return `${UTCTime} ${currentMillis}ms`
}
