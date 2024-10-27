import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { IpLog, socketUrl } from "./config"
import { ServerApp } from "./components/serverApp.tsx"

const socket = io(socketUrl)

export default function App() {
  const [ipLog, setIpLog] = useState<IpLog>()
  useEffect(() => {
    socket.on("onChange", (log) => {
      console.log(log)
      setIpLog(log)
    })
  }, [])
  const sendIpWithSocket = (ip: string) => {
    socket.emit("ip", ip)
  }
  return (
    <div className="p-8">
      <ServerApp ipLog={ipLog} sendIp={sendIpWithSocket} />
    </div>
  )
}
