import { useEffect, useState } from "react"
import { IpInfo } from "./ipInfo"
import { Time } from "./time"
import { postIpInfo } from "../../fetch/postIpInfo"
import { IpLog } from "../../config"
import { UserName } from "./userName"

export const MainUser = ({ ipLog }: { ipLog: IpLog | undefined }) => {
  const [identifier, setIdentifier] = useState<string>()
  const [ip, setIp] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [userName, setUserName] = useState<string>("User")

  const postName = async () => {
    const myIp = await postIpInfo(userName)
    setIdentifier(myIp)
  }

  useEffect(() => {
    postName()
  }, [])

  useEffect(() => {
    const update = () => {
      if (!(identifier && ipLog)) return
      const myInfo = ipLog[identifier]
      if (!myInfo) return
      const { ip, name, city, country } = myInfo
      setIp(ip)
      setLocation(`${city} - ${country}`)
      setUserName(name)
    }
    update()
  }, [ipLog, identifier])

  const updateName = (value: string) => {
    setUserName(value)
  }

  return (
    <div className="flex-none p-8 rounded-lg bg-neutral-800">
      <UserName
        userName={userName}
        updateName={updateName}
        postName={postName}
      />
      <div className="pt-4"></div>
      <IpInfo ip={ip} location={location} />
      <div className="pt-4"></div>
      <Time />
    </div>
  )
}
