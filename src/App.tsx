import { useEffect } from "react"
import { MainUser } from "./components/infoPanel/mainUser"
import { io } from "socket.io-client"

export default function App() {
  const socket = io("http://localhost:3002")
  useEffect(() => {
    socket.on("onChange", (message) => {
      console.log(message)
    })
  })
  return (
    <div className="p-8">
      <div className="flex">
        <MainUser />
      </div>
    </div>
  )
}
