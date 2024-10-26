import { Connection } from "./components/connection"
import { MainUser } from "./components/infoPanel/mainUser"
import { ServerPanel } from "./components/infoPanel/serverPanel"
import { IpLog } from "./config"

export const ServerApp = ({ ipLog }: { ipLog: IpLog | undefined }) => {
  return (
    <div>
      <div className="flex flex-col items-center w-full pb-8">
        <h1 className="pb-4 text-3xl font-bold text-neutral-300">
          What time is the server
        </h1>
        <button className="px-4 py-1 bg-yellow-400 rounded-full text-neutral-900">
          Ask politely
        </button>
      </div>
      <div className="flex items-center justify-between gap-8">
        <MainUser ipLog={ipLog} />
        <Connection />
        <ServerPanel ipLog={ipLog} />
      </div>
    </div>
  )
}
