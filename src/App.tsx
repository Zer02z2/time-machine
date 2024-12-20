import { useEffect, useState } from "react"
import { socket, UserData, UserLog } from "./config"
import { ServerApp } from "./components/serverApp.tsx"
import { getTimeZone } from "./components/serverApp.tsx/infoPanel/time.tsx"
import { OnlineUsers } from "./components/onlineUsers/index.tsx"

export default function App() {
  const [userLog, setUserLog] = useState<UserLog>()
  const [user, setUser] = useState<UserData>()
  const [userId, setUserId] = useState<string>()

  useEffect(() => {
    socket.on("connect", () => {
      const id = socket.id
      setUserId(id)
      const timeZone = getTimeZone()
      const userName = "Edit your name"
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
  }, [userLog, userId])

  return (
    <>
      {userId && user && userLog && (
        <div className="flex min-w-[85rem]">
          <div className="flex justify-center flex-1">
            <div className="w-full p-8 max-w-7xl">
              <ServerApp userLog={userLog} user={user} />
            </div>
          </div>
          <div className="flex-none w-72">
            <div className="fixed top-0 right-0 h-screen p-8 overflow-y-auto border-l border-neutral-400 w-72 bg-neutral-300">
              <OnlineUsers myId={userId} user={user} userLog={userLog} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
