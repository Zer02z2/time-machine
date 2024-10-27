import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { IpLog, socketUrl, UserData } from "./config"
import { ServerApp } from "./components/serverApp.tsx"
import { getTimeZone } from "./components/infoPanel/time.tsx"
import { postIpInfo } from "./fetch/postIpInfo.ts"

const socket = io(socketUrl)

export default function App() {
  const [ipLog, setIpLog] = useState<IpLog>()
  const [user, setUser] = useState<UserData>({ name: "Client Name" })

  useEffect(() => {
    socket.on("onChange", (log) => {
      console.log(log)
      setIpLog(log)
      if (!(ipLog && user.identifier)) return
      if (!ipLog[user.identifier]) return
      setUser(ipLog[user.identifier])
    })
    init()
  }, [])

  const init = async () => {
    const timeZone = getTimeZone()
    const identifier = await postIpInfo({ ...user, timeZone: timeZone })
    setUser({ ...user, identifier: identifier })
    postIpInfo({ ...user, identifier: identifier })
  }

  useEffect(() => {
    socket.emit("identifier", user.identifier)
  }, [user.identifier])

  return (
    <div className="p-8">
      <ServerApp ipLog={ipLog} user={user} />
    </div>
  )
}
