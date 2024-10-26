const dev = true

export const fetchUrl = `${
  dev ? "http://localhost:3001" : "https://io.zongzechen.com"
}/undnet/timeMachine/api`

export interface IpLog {
  [name: string]: {
    ip: string
    name: string
    city: string | undefined
    country: string | undefined
  }
}
