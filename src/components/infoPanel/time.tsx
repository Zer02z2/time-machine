import { useEffect, useState } from "react"
import { SmallText } from "../smallText"

export const Time = () => {
  const [timeZone, setTimeZone] = useState<string | null>()
  const [UTCTime, setUTCTime] = useState<string | null>()
  const [localTime, setLocalTime] = useState<string | null>()

  useEffect(() => {
    const updateTime = () => {
      const time = new Date()
      setUTCTime(time.toUTCString())
      setLocalTime(time.toLocaleString())
      window.requestAnimationFrame(updateTime)
    }
    const bootTime = new Date()
    const clientOffset = bootTime.getTimezoneOffset()
    const hourOffset = -clientOffset / 60
    const timeZone = `(UTC ${hourOffset}:00)`
    setTimeZone(timeZone)
    updateTime()
  }, [])

  return (
    <div>
      <SmallText>{`Local time ${timeZone && timeZone}`}</SmallText>
      <p>{localTime && localTime}</p>
      <SmallText>UTC time</SmallText>
      <p>{UTCTime && UTCTime}</p>
    </div>
  )
}
