import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { IpLog } from "./config"
import { ServerApp } from "./serverApp"

const socket = io("http://localhost:3002")

export default function App() {
  const [ipLog, setIpLog] = useState<IpLog>()
  useEffect(() => {
    socket.on("onChange", (log) => {
      console.log(log)
      setIpLog(log)
    })
  }, [])
  return (
    <div className="p-8">
      <ServerApp ipLog={ipLog} />
    </div>
  )
}
