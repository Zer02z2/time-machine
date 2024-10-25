import { useEffect, useState } from "react"
import { IpInfo } from "./ipInfo"
import { Time } from "./time"
import { getIpInfo } from "../../fetch/getIpInfo"

export const MainUser = () => {
  const [ip, setIp] = useState<string | undefined>()
  const [location, setLocation] = useState<string | undefined>()

  useEffect(() => {
    const init = async () => {
      const ipInfo = await getIpInfo()
      if (!ipInfo) return
      const { ip, city, country } = ipInfo
      setIp(ip)
      if (city && country) {
        setLocation(`${city} - ${country}`)
      }
    }
    init()
  }, [])
  return (
    <div className="p-8 rounded-lg bg-neutral-800">
      <div className="flex items-center gap-2">
        <img className="size-4" src="/user.svg"></img>
        <input
          type="text"
          placeholder="client name"
          className="px-2 bg-transparent border rounded-md text-neutral-500 placeholder:text-neutral-500 border-neutral-700 focus:outline-none"
        ></input>
      </div>
      <div className="pt-4"></div>
      <IpInfo ip={ip} location={location} />
      <div className="pt-4"></div>
      <Time />
    </div>
  )
}
