import { useEffect, useState } from "react"
import { getIpInfo } from "../fetch/getIp"
import { SmallText } from "./smallText"

export const MainUser = () => {
  const [clientIp, setClientIp] = useState<string | null>()
  const [location, setLocation] = useState<string | null>()
  const [UTCTime, setUTCTime] = useState<string | null>()
  const [localTime, setLocalTime] = useState<string | null>()

  useEffect(() => {
    const init = async () => {
      const ipInfo = await getIpInfo()
      if (!ipInfo) return
      const { ip, city, country } = ipInfo
      setClientIp(ip)
      if (city && country) {
        setLocation(`${city} - ${country}`)
      }
    }
    const updateTime = () => {
      const time = new Date()
      setUTCTime(time.toUTCString())
      setLocalTime(time.toLocaleString())
      window.requestAnimationFrame(updateTime)
    }
    init()
    updateTime()
  }, [])
  return (
    <div className="bg-neutral-800 rounded-lg p-8">
      <SmallText>IP</SmallText>
      <h1 className="text-3xl">{clientIp && clientIp}</h1>
      <div className="flex items-center gap-2 pb-4">
        <img className="size-4" src="/location.svg"></img>
        <h2 className="text-xl">{location && location}</h2>
      </div>
      <SmallText>Local time</SmallText>
      <p>{localTime && localTime}</p>
      <SmallText>UTC time</SmallText>
      <p>{UTCTime && UTCTime}</p>
    </div>
  )
}
