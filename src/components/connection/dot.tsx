import { DotColor } from "."

export const Dot = ({ color }: { color: DotColor }) => {
  return (
    <div>
      <div
        className={`${
          color === "yellow" ? "bg-yellow-400" : "bg-teal-500"
        } rounded-full size-4`}
      ></div>
    </div>
  )
}
