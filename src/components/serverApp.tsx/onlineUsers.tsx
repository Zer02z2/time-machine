import { UserData, UserLog } from "../../config"
import { OtherUser } from "./infoPanel/otherUser"

export const OnlineUsers = ({
  user,
  userLog,
}: {
  user: UserData
  userLog: UserLog
}) => {
  return (
    <div>
      <OtherUser me={user} otherUser={user} />
    </div>
  )
}
