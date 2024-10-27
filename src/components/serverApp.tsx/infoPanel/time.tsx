import { useEffect, useState } from "react"
import { SmallText } from "../../smallText"

export const getTimeZone = () => {
  const bootTime = new Date()
  const clientOffset = bootTime.getTimezoneOffset()
  const hourOffset = -clientOffset / 60
  return `(UTC ${hourOffset}:00)`
}

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
    setTimeZone(getTimeZone())
    updateTime()
  }, [])

  return (
    <div>
      <SmallText>{`Device local time ${timeZone && timeZone}`}</SmallText>
      <p>{localTime && localTime}</p>
      <div className="pt-2"></div>
      <SmallText>Decive UTC time</SmallText>
      <p>{UTCTime && UTCTime}</p>
    </div>
  )
}
