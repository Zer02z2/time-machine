import { useEffect, useState } from "react"
import { socket, UserData, UserLog } from "./config"
import { ServerApp } from "./components/serverApp.tsx"
import { getTimeZone } from "./components/serverApp.tsx/infoPanel/time.tsx"

export default function App() {
  const [userLog, setUserLog] = useState<UserLog>()
  const [user, setUser] = useState<UserData>()
  const [userId, setUserId] = useState<string>()

  useEffect(() => {
    socket.on("connect", () => {
      const id = socket.id
      setUserId(id)
      const timeZone = getTimeZone()
      const userName = "Client Name"
      const user = {
        name: userName,
        timeZone: timeZone,
      }
      socket.emit("init", user)
    })
    socket.on("onChange", (userLog: UserLog) => {
      setUserLog(userLog)
    })
  }, [])

  useEffect(() => {
    if (!(userLog && userId)) return
    if (userLog[userId]) {
      setUser(userLog[userId])
    }
  }, [userLog])

  return (
    <div className="p-8">
      {user && userLog && <ServerApp userLog={userLog} user={user} />}
    </div>
  )
}
