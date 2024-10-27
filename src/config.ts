const dev = true

export const fetchUrl = `${
  dev ? "http://localhost:3001" : "https://io.zongzechen.com"
}/undnet/timeMachine/api`

export const socketUrl = `${
  dev
    ? "http://localhost:3002"
    : "https://io.zongzechen.com/undnet/timeMachine/socket"
}`

export interface IpLog {
  [name: string]: UserData
}

export interface UserData {
  name: string
  timeZone: string | undefined
  publicIp?: string
  location?: {
    city: string
    country: string
  }
  timeDifference?: number
}
