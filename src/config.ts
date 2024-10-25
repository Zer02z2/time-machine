const dev = true

const fetchUrl = `${
  dev ? "http://localhost:3001" : "https://io.zongzechen.com"
}/undnet/timeMachine/api`

export { fetchUrl }
