import { UserData } from "../../config"
import { ColorResult, getResult, HighLight } from "../highlight"
import { SmallText } from "../smallText"
import { IpInfo } from "../serverApp.tsx/infoPanel/ipInfo"
import svgUrl from "../../assets/user.svg"
import { useEffect, useState } from "react"

export const OtherUser = ({
  me,
  otherUser,
}: {
  me: UserData
  otherUser?: UserData
}) => {
  const [user, setUser] = useState<UserData>()
  const [result, setResult] = useState<ColorResult>()

  useEffect(() => {
    const difference = calcDifference()
    setUser(otherUser ? otherUser : me)
    setResult(
      otherUser ? getResult(difference) : { color: "yellow", text: "myself" }
    )
  }, [me, otherUser])

  const calcDifference = () => {
    if (!otherUser) return undefined
    const { timeDifference } = otherUser
    const myTimeDifference = me.timeDifference
    if (timeDifference !== undefined && myTimeDifference !== undefined) {
      return timeDifference - myTimeDifference
    }
    return undefined
  }
  return (
    <>
      {user && result && (
        <div className="flex-none p-4 rounded-lg bg-neutral-200">
          <div className="flex items-center gap-2">
            <img className="size-4" src={svgUrl}></img>
            <SmallText>{user.name}</SmallText>
          </div>
          <div className="pt-2"></div>
          <IpInfo
            ip={user.publicIp}
            location={
              user.location &&
              `${user.location.city} - ${user.location.country}`
            }
            otherUser={true}
          />
          <div className="pt-2"></div>
          <h3 className="text-xl">
            <HighLight color={result.color}>{result.text}</HighLight>
          </h3>
        </div>
      )}
    </>
  )
}
