import { SmallText } from "../../smallText"
import { motion } from "framer-motion"

export const Message = ({
  time,
  message,
  who,
}: {
  time: string
  message: string
  who: "user" | "server"
}) => {
  return (
    <motion.div
      className="flex gap-2"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <img
        src={who === "user" ? "/user.svg" : "/server.svg"}
        className="size-6"
      ></img>
      <div>
        <SmallText>{time}</SmallText>
        <div className="inline-block">
          <SmallText>-&nbsp;&nbsp;</SmallText>
        </div>
        <p className="inline-block">{message}</p>
      </div>
    </motion.div>
  )
}
