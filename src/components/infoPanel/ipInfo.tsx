export const IpInfo = ({
  ip,
  location,
}: {
  ip: string | undefined
  location: string | undefined
}) => {
  return (
    <div>
      <h1 className="text-3xl">{ip && ip}</h1>
      <div className="flex items-center gap-2">
        <img className="size-4" src="/location.svg"></img>
        <h2 className="text-xl">{location && location}</h2>
      </div>
    </div>
  )
}
