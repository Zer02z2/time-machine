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
      millisTime: number
      serverMillis: number
      serverTime: string
    } = await response.json()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
