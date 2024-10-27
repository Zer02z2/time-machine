import { IpInfo } from "./ipInfo"
import { UserData } from "../../../config"
import { UserName } from "./userName"

import { Time } from "./time"

export const MainUser = ({ user }: { user: UserData }) => {
  const { publicIp, location } = user

  return (
    <div className="flex-none p-8 rounded-lg bg-neutral-200">
      <UserName user={user} />
      <div className="pt-4"></div>
      <IpInfo
        ip={publicIp}
        location={location && `${location.city} - ${location.country}`}
      />
      <div className="pt-4"></div>
      <Time />
    </div>
  )
}
