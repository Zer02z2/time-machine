import { useEffect, useState } from "react"
import { UserLog } from "../../../config"
import { SmallText } from "../../smallText"
import { IpInfo } from "./ipInfo"
import { getResult, HighLight } from "../../highlight"

export const ServerPanel = ({
  userLog,
  differences,
}: {
  userLog: UserLog
  differences: number[]
}) => {
  const data = userLog["server"]
  const { publicIp, location, timeZone, timeDifference } = data

  const calcAverage = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((sum, num) => sum + num)
    const average = Math.floor(sum / arr.length)
    return average
  }

  const result = getResult(calcAverage(differences))

  useEffect(() => {}, [differences])

  return (
    <div className="flex-none p-8 rounded-lg bg-neutral-200">
      <div className="flex items-center h-10 gap-2">
        <img className="size-4" src="/server.svg"></img>
        <SmallText>Server</SmallText>
      </div>
      <div className="pt-4"></div>
      <IpInfo
        ip={publicIp}
        location={location && `${location.city} - ${location.country}`}
      />
      <div className="pt-4"></div>
      {timeZone && <SmallText>{`Time zone: ${timeZone}`}</SmallText>}
      <div className="pt-2"></div>
      {differences.length > 0 && (
        <>
          <SmallText>On average, the server is</SmallText>
          <h3 className="text-xl">
            <HighLight color={result.color}>{result.text}</HighLight>
          </h3>
        </>
      )}
    </div>
  )
}
