import { useEffect, useState } from "react"
import { getIpInfo } from "../../fetch/getIp"

export const IpInfo = () => {
  const [clientIp, setClientIp] = useState<string | null>()
  const [location, setLocation] = useState<string | null>()

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
    init()
  }, [])

  return (
    <div>
      <h1 className="text-3xl">{clientIp && clientIp}</h1>
      <div className="flex items-center gap-2">
        <img className="size-4" src="/location.svg"></img>
        <h2 className="text-xl">{location && location}</h2>
      </div>
    </div>
  )
}
