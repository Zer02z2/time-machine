import { FC } from "react"

export const SmallText: FC<{ children: string }> = ({ children }) => {
  return <p className="text-sm text-neutral-500">{children}</p>
}
