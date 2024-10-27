import { FC } from "react"

export const HighLight: FC<{
  children: string
  color: "yellow" | "green" | "purple" | "pink"
}> = ({ children, color }) => {
  const colors = {
    yellow: "bg-yellow-300",
    green: "bg-teal-300",
    purple: "bg-indigo-300",
    pink: "bg-pink-300",
  }
  return (
    <span
      className={`${colors[color]} rounded-full text-neutral-900 px-2 font-medium`}
    >
      {children}
    </span>
  )
}

export const getResult = (
  millis: number
): { color: "yellow" | "green" | "pink"; text: string } => {
  if (millis > 0) {
    return {
      text: `${millis}ms in the future`,
      color: "green",
    }
  } else if (millis < 0) {
    return {
      text: `${-millis}ms in the past`,
      color: "pink",
    }
  } else {
    return {
      text: "in sync",
      color: "yellow",
    }
  }
}
