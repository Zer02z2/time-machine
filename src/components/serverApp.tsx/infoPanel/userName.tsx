import { useEffect, useState } from "react"
import { socket, UserData } from "../../../config"
import svgUrl from "../../../assets/user.svg"

export const UserName = ({ user }: { user: UserData }) => {
  const [value, setValue] = useState<string>("")
  useEffect(() => {
    setValue(user.name)
  }, [user.name])

  return (
    <div className="flex items-center h-10 gap-2">
      <img className="size-4" src={svgUrl}></img>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (value.replace(/\s+/g, "").length === 0) return
          socket.emit("userData", { ...user, name: value })
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return
          if (value.replace(/\s+/g, "").length === 0) return
          socket.emit("userData", { ...user, name: value })
          const target = e.target as HTMLInputElement
          target.blur()
        }}
        onFocus={(e) => e.target.select()}
        className="px-2 bg-transparent border rounded-md text-neutral-500 placeholder:text-neutral-500 border-neutral-500 focus:outline-none focus:border-neutral-900"
      ></input>
    </div>
  )
}
