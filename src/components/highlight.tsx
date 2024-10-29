import { FC } from "react"

export interface ColorResult {
  color: "yellow" | "green" | "pink" | "gray"
  text: string
}

export const HighLight: FC<{
  children: string
  color: "yellow" | "green" | "purple" | "pink" | "gray"
}> = ({ children, color }) => {
  const colors = {
    yellow: "bg-yellow-300",
    green: "bg-teal-300",
    purple: "bg-indigo-300",
    pink: "bg-pink-300",
    gray: "bg-neutral-300",
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
  millis: number | undefined
): { color: "yellow" | "green" | "pink" | "gray"; text: string } => {
  if (millis !== 0 && !millis) {
    return {
      text: "Unknown",
      color: "gray",
    }
  }
  if (millis > 0) {
    return {
      text: `${millis}ms ahead`,
      color: "green",
    }
  } else if (millis < 0) {
    return {
      text: `${-millis}ms behind`,
      color: "pink",
    }
  } else {
    return {
      text: "in sync",
      color: "yellow",
    }
  }
}
