import { SmallText } from "../smallText"

export const Message = ({
  time,
  message,
  who,
}: {
  time: string
  message: string
  who: "user" | "server"
}) => {
  return (
    <div>
      <SmallText>{time}</SmallText>
      <p>{message}</p>
    </div>
  )
}
