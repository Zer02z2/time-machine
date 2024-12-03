import { io } from "socket.io-client"

const dev = false

export const fetchUrl = `${
  dev ? "http://localhost:3001" : "https://io.zongzechen.com"
}/undnet/timeMachine/api`

export const socketUrl = `${
  dev ? "http://localhost:3001/timeMachine" : "https://io.zongzechen.com/"
}`

export const socket = io(socketUrl)

export interface UserLog {
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
