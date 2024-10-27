import { useEffect, useState } from "react"
import { IpLog } from "../../config"
import { SmallText } from "../smallText"
import { IpInfo } from "./ipInfo"
import { getResult, HighLight } from "../serverApp.tsx/highlight"

export const ServerPanel = ({
  ipLog,
  differences,
}: {
  ipLog: IpLog | undefined
  differences: number[]
}) => {
  const [ip, setIp] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [timeZone, setTimeZone] = useState<string>()
  const identifier = "serverIp"

  useEffect(() => {
    if (!ipLog) return
    if (!ipLog[identifier]) return
    const { ip, city, country, timeZone } = ipLog[identifier]
    setIp(ip)
    setLocation(`${city} - ${country}`)
    setTimeZone(timeZone)
  }, [ipLog])

  const calcAverage = (arr: number[]) => {
    if (arr.length === 0) return 0
    const sum = arr.reduce((sum, num) => sum + num)
    const average = Math.floor(sum / arr.length)
    return average
  }

  const result = getResult(calcAverage(differences))

  return (
    <div className="flex-none p-8 rounded-lg bg-neutral-800">
      <div className="flex items-center gap-2">
        <img className="size-4" src="/server.svg"></img>
        <SmallText>Server</SmallText>
      </div>
      <div className="pt-4"></div>
      <IpInfo ip={ip} location={location} />
      <div className="pt-4"></div>
      {timeZone && <SmallText>{`Time zone: ${timeZone}`}</SmallText>}
      <div className="pt-4"></div>
      {differences[0] && (
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
