export const IpInfo = ({
  ip,
  location,
  otherUser = false,
}: {
  ip: string | undefined
  location: string | undefined
  otherUser?: boolean
}) => {
  return (
    <div>
      <h1 className={otherUser ? "text-lg" : "text-3xl"}>{ip && ip}</h1>
      <div className="flex items-center gap-2">
        <img
          className={otherUser ? "size-3" : "size-4"}
          src="/location.svg"
        ></img>
        <h2 className={otherUser ? "text-sm" : "text-xl"}>
          {location && location}
        </h2>
      </div>
    </div>
  )
}
