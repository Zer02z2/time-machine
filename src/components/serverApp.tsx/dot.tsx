import { DotColor } from "./connection"

export const Dot = ({ color }: { color: DotColor }) => {
  return (
    <div>
      <div
        className={`${
          color === "yellow" ? "bg-yellow-300" : "bg-teal-300"
        } rounded-full size-4`}
      ></div>
    </div>
  )
}
