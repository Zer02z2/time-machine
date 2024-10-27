import { Fragment, useEffect, useState } from "react"
import { UserData, UserLog } from "../../config"
import { OtherUser } from "./otherUser"
import { SmallText } from "../smallText"

export const OnlineUsers = ({
  myId,
  user,
  userLog,
}: {
  myId: string
  user: UserData
  userLog: UserLog
}) => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>()

  useEffect(() => {
    const keys = Object.keys(userLog)
    const userKeys = keys.filter((key) => key !== myId && key !== "server")
    setOnlineUsers(userKeys)
  }, [userLog])

  return (
    <div>
      <SmallText>{`Other users - (${
        onlineUsers ? onlineUsers.length : 0
      })`}</SmallText>
      <div className="pt-4"></div>
      {onlineUsers &&
        onlineUsers.length > 0 &&
        onlineUsers.map((userKey, index) => {
          return (
            <Fragment key={index}>
              {userLog[userKey] && (
                <OtherUser me={user} otherUser={userLog[userKey]} />
              )}
            </Fragment>
          )
        })}
    </div>
  )
}
