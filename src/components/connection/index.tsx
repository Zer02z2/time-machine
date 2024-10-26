import { useEffect, useRef, useState } from "react"
import { Dot } from "./dot"
import { useAnimate } from "framer-motion"

interface Props {
  isFetching: boolean
}
export type DotColor = "yellow" | "green"

export const Connection = ({ props }: { props: Props }) => {
  const { isFetching } = props
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
  }

  useEffect(() => {
    moveDot()
  }, [isFetching])

  return (
    <div className="flex-initial w-full h-full">
      <div className="relative flex items-center justify-center h-8">
        <div className="w-full border-t border-neutral-500"></div>
        <div ref={scope} className="absolute left-0">
          <Dot color={color} />
        </div>
      </div>
    </div>
  )
}
