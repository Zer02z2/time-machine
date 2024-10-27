import { fetchUrl, UserData } from "../config"

export const postIpInfo = async (userData: UserData) => {
  const { name, timeZone, timeDifference } = userData
  const data = {
    name: name,
    timeZone: timeZone,
    timeDifference: timeDifference,
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
