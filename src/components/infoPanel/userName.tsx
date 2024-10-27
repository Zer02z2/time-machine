import { useEffect, useState } from "react"
import { UserData } from "../../config"
import { postIpInfo } from "../../fetch/postIpInfo"

export const UserName = ({ user }: { user: UserData }) => {
  const [value, setValue] = useState<string>("")
  useEffect(() => {
    setValue(user.name)
  }, [user.name])

  return (
    <div className="flex items-center h-10 gap-2">
      <img className="size-4" src="/user.svg"></img>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (value.replace(/\s+/g, "").length === 0) return
          postIpInfo({ ...user, name: value })
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return
          if (value.replace(/\s+/g, "").length === 0) return
          postIpInfo({ ...user, name: value })
          const target = e.target as HTMLInputElement
          target.blur()
        }}
        className="px-2 bg-transparent border rounded-md text-neutral-500 placeholder:text-neutral-500 border-neutral-700 focus:outline-none focus:border-neutral-500"
      ></input>
    </div>
  )
}
