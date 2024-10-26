import { Dot } from "./dot"

export const Connection = () => {
  return (
    <div className="flex-initial w-full h-full">
      <div className="relative flex items-center justify-center h-8">
        <div className="w-full border-t border-neutral-500"></div>
        <div className="absolute left-0">
          <Dot />
        </div>
      </div>
    </div>
  )
}
