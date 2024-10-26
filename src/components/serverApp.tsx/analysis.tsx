import { FC } from "react"
import { timeStamp } from "./connection"
import { motion } from "framer-motion"

interface Props {
  startTime: number
  receiveTime: number
  serverTime: number
}

export const Analysis = ({ props }: { props: Props }) => {
  const { startTime, serverTime, receiveTime } = props

  const roundTripTime = receiveTime - startTime
  const halfTripTime = Math.floor(roundTripTime / 2)
  const theoryTimeMillis = startTime + halfTripTime
  const theoryTime = timeStamp(theoryTimeMillis)
  const actualTime = timeStamp(serverTime)

  const HighLight: FC<{
    children: string
    color: "yellow" | "green" | "purple"
  }> = ({ children, color }) => {
    const colors = {
      yellow: "bg-yellow-300",
      green: "bg-teal-500",
      purple: "bg-indigo-300",
    }
    return (
      <span
        className={`${colors[color]} rounded-full text-neutral-900 px-2 font-medium`}
      >
        {children}
      </span>
    )
  }

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h3 className="max-w-xl text-xl">
        <span>In the last HTTP request, it took&nbsp;</span>
        <HighLight color="yellow">{`${roundTripTime}ms`}</HighLight>
        <span>
          &nbsp;for the request to take a round trip. Assuming the time from me
          to the server and from the server back to me is equal, it would
          take&nbsp;
        </span>
        <HighLight color="yellow">{`${halfTripTime}ms`}</HighLight>
        <span>&nbsp;for the server to get my request.</span>
      </h3>
      <h3 className="max-w-xl text-xl">
        <span>
          That means, the server should have received the request at&nbsp;
        </span>
        <HighLight color="purple">{theoryTime}</HighLight>
        <span>, but the server reported that it was&nbsp;</span>
        <HighLight color="purple">{actualTime}</HighLight>
        <span>.</span>
      </h3>
    </motion.div>
  )
}
