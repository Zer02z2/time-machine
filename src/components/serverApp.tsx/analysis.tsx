import { FC } from "react"

interface Props {
  startTime: number
  receiveTime: number
  serverTime: number
}

export const Analysis = ({ props }: { props: Props }) => {
  const { startTime, serverTime, receiveTime } = props

  const roundTripTime = receiveTime - startTime
  const halfTripTime = Math.floor(roundTripTime / 2)

  const HighLight: FC<{
    children: string
    color: "yellow" | "green" | "purple"
  }> = ({ children, color }) => {
    const colors = {
      yellow: "bg-yellow-400",
      green: "bg-teal-500",
      purple: "bg-indigo-400",
    }
    return (
      <span
        className={`${colors[color]} rounded-full text-neutral-800 px-2 font-medium`}
      >
        {children}
      </span>
    )
  }

  return (
    <div>
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
    </div>
  )
}
