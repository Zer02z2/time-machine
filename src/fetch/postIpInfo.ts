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
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

// export const getServerIpInfo = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   }
//   try {
//     const response = await fetch(`${fetchUrl}/serverIp`, options)
//     const result = await response.json()
//     const ipInfo: IpInfo = result
//     return ipInfo
//   } catch (error) {
//     console.log(error)
//   }
// }
