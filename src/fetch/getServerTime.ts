import { fetchUrl } from "../config"

export const getServerTime = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
  try {
    const response = await fetch(`${fetchUrl}/serverTime`, options)
    const result: {
      time: number
    } = await response.json()
    return result.time
  } catch (error) {
    console.log(error)
  }
}
