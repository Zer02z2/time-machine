import { getTimeZone } from "../components/infoPanel/time"
import { fetchUrl } from "../config"

export const postIpInfo = async (name: string) => {
  const data = {
    name: name,
    timeZone: getTimeZone(),
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }
  try {
    const response = await fetch(`${fetchUrl}/ip`, options)
    const result = await response.json()
    const ip: string = result.ip
    return ip
  } catch (error) {
    console.log(error)
  }
}
