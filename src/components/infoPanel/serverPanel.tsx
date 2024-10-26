import { useEffect, useState } from "react"
import { IpLog } from "../../config"
import { SmallText } from "../smallText"
import { IpInfo } from "./ipInfo"

export const ServerPanel = ({ ipLog }: { ipLog: IpLog | undefined }) => {
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

  return (
    <div className="flex-none p-8 rounded-lg bg-neutral-800">
      <div className="flex items-center gap-2">
        <img className="size-4" src="/server.svg"></img>
        <SmallText>Server</SmallText>
      </div>
      <div className="pt-4"></div>
      <IpInfo ip={ip} location={location} />
      <div className="pt-4"></div>
      {timeZone && <SmallText>{timeZone}</SmallText>}
    </div>
  )
}
