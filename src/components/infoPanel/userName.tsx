export const UserName = ({
  userName,
  updateName,
  postName,
}: {
  userName: string
  updateName: (value: string) => void
  postName: () => void
}) => {
  return (
    <div className="flex items-center gap-2">
      <img className="size-4" src="/user.svg"></img>
      <input
        type="text"
        value={userName}
        onChange={(e) => updateName(e.target.value)}
        onBlur={() => {
          if (userName.replace(/\s+/g, "").length === 0) return
          postName()
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return
          if (userName.replace(/\s+/g, "").length === 0) return
          postName()
          const target = e.target as HTMLInputElement
          target.blur()
        }}
        className="px-2 bg-transparent border rounded-md text-neutral-500 placeholder:text-neutral-500 border-neutral-700 focus:outline-none focus:border-neutral-500"
      ></input>
    </div>
  )
}
