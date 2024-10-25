import { IpInfo } from "./ipInfo"
import { Time } from "./time"

export const MainUser = () => {
  return (
    <div className="p-8 rounded-lg bg-neutral-800">
      <div className="flex items-center gap-2 pb-2">
        <img className="size-4" src="/user.svg"></img>
        <input
          type="text"
          placeholder="client name"
          className="px-2 bg-transparent border rounded-md text-neutral-500 placeholder:text-neutral-500 border-neutral-700 focus:outline-none"
        ></input>
      </div>
      <IpInfo />
      <div className="pt-4"></div>
      <Time />
    </div>
  )
}
