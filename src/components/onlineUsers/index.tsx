import { useEffect, useState } from "react"
import { UserData, UserLog } from "../../config"
import { OtherUser } from "./otherUser"
import { SmallText } from "../smallText"
import { motion, AnimatePresence } from "framer-motion"

export const OnlineUsers = ({
  myId,
  user,
  userLog,
}: {
  myId: string
  user: UserData
  userLog: UserLog
}) => {
  const [onlineUsers, setOnlineUsers] = useState<UserLog>()

  useEffect(() => {
    const keys = Object.keys(userLog)
    const userKeys = keys.filter((key) => key !== myId && key !== "server")
    const subset: UserLog = {}
    userKeys.forEach((key) => {
      subset[key] = userLog[key]
    })
    setOnlineUsers(subset)
  }, [userLog, myId])

  return (
    <div>
      <SmallText>{`Other users - (${
        onlineUsers ? Object.keys(onlineUsers).length : 0
      })`}</SmallText>
      <div className="flex flex-col gap-2 pt-4">
        <AnimatePresence>
          {onlineUsers &&
            Object.keys(onlineUsers).map((key) => {
              return (
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  key={key}
                >
                  <OtherUser me={user} otherUser={onlineUsers[key]} />
                </motion.div>
              )
            })}
        </AnimatePresence>
      </div>
    </div>
  )
}
