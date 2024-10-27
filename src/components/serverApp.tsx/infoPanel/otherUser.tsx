import { UserData } from "../../../config"
import { getResult, HighLight } from "../../highlight"
import { SmallText } from "../../smallText"
import { IpInfo } from "./ipInfo"

export const OtherUser = ({
  me,
  otherUser,
}: {
  me: UserData
  otherUser: UserData
}) => {
  const myTimeDifference = me.timeDifference
  const { name, publicIp, location, timeDifference } = otherUser
  const difference =
    myTimeDifference && timeDifference
      ? myTimeDifference - timeDifference
      : undefined

  const result = getResult(difference)
  return (
    <div className="flex-none p-4 rounded-lg bg-neutral-200">
      <div className="flex items-center h-10 gap-2">
        <img className="size-4" src="/user.svg"></img>
        <SmallText>{name}</SmallText>
      </div>
      <IpInfo
        ip={publicIp}
        location={location && `${location.city} - ${location.country}`}
        otherUser={true}
      />
      <div className="pt-2"></div>
      <h3 className="text-xl">
        <HighLight color={result.color}>{result.text}</HighLight>
      </h3>
    </div>
  )
}
