import { useEffect, useState } from "react"
import { MainUser } from "./components/infoPanel/mainUser"
import { io } from "socket.io-client"
import { IpLog } from "./config"

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
      <div className="flex">
        <MainUser ipLog={ipLog} />
      </div>
    </div>
  )
}
