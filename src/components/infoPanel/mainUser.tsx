import { useEffect, useState } from "react"
import { IpInfo } from "./ipInfo"
import { Time } from "./time"
import { postIpInfo } from "../../fetch/postIpInfo"
import { IpLog } from "../../config"

export const MainUser = ({ ipLog }: { ipLog: IpLog | undefined }) => {
  const [ip, setIp] = useState<string | undefined>()
  const [location, setLocation] = useState<string | undefined>()
  const [userName, setUserName] = useState<string>("User")

  useEffect(() => {
    const update = async () => {
      const myIp = await postIpInfo("ZZ")
      if (!(myIp && ipLog)) return
      const myInfo = ipLog[myIp]
      const { ip, name, city, country } = myInfo
      setIp(ip)
      setLocation(`${city} - ${country}`)
      setUserName(name)
    }
    update()
  }, [ipLog])
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
