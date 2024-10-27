import React, { useState } from "react"
import { UserData, UserLog } from "../../config"
import { getServerTime } from "../../fetch/getServerTime"
import { MainUser } from "./infoPanel/mainUser"
import { Connection } from "./connection"
import { ServerPanel } from "./infoPanel/serverPanel"
import { Header } from "./header"
import { Analysis } from "./analysis"
import { AnimatePresence } from "framer-motion"

export const ServerApp = ({
  userLog,
  user,
}: {
  userLog: UserLog
  user: UserData
}) => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<number>()
  const [receiveTime, setReceiveTime] = useState<number>()
  const [serverTime, setServerTime] = useState<number>()
  const [differences, setDifferences] = useState<number[]>([])

  const askServer = async () => {
    setIsFetching(true)
    setStartTime(new Date().getTime())
    const response = await getServerTime()
    if (!response) return
    setReceiveTime(new Date().getTime())
    setServerTime(response)
  }

  const addDifferences = (value: number) => {
    setDifferences((prev) => [...prev, value])
  }

  return (
    <div>
      <Header askServer={askServer} isFetching={isFetching} />
      <div className="pt-4"></div>
      <div className="flex gap-8">
        <MainUser user={user} />
        <Connection
          props={{
            isFetching: isFetching,
            setIsFetching: setIsFetching,
            startTime: startTime,
            receiveTime: receiveTime,
            serverTime: serverTime,
          }}
        />
        <ServerPanel userLog={userLog} differences={differences} />
      </div>
      <div className="pt-20"></div>
      <AnimatePresence>
        {!isFetching && startTime && serverTime && receiveTime && (
          <Analysis
            props={{
              startTime: startTime,
              serverTime: serverTime,
              receiveTime: receiveTime,
              addDifferences: addDifferences,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
