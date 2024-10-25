import { fetchUrl } from "../config"

interface IpInfo {
  ip: string
  city: string | undefined
  country: string | undefined
}

export const postIpInfo = async (name: string) => {
  const data = {
    name: name,
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

// export const getIpInfo = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   }
//   try {
//     const response = await fetch(`${fetchUrl}/myIp`, options)
//     const result = await response.json()
//     const ip: string = result.ip
//     return ip
//   } catch (error) {
//     console.log(error)
//   }
// }
