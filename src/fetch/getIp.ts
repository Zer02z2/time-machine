import { fetchUrl } from "../config"

interface IpInfo {
  ip: string
  city: string | undefined
  country: string | undefined
}

export const getIpInfo = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
  try {
    const response = await fetch(`${fetchUrl}/ip`, options)
    const result = await response.json()
    const ipInfo: IpInfo = result
    return ipInfo
  } catch (error) {
    console.log(error)
  }
}
