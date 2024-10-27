import React, { useEffect, useState } from "react"
import { socket, UserData, UserLog } from "../../config"
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

  const calcAverage = (arr: number[]) => {
    const sum = arr.reduce((sum, num) => sum + num)
    const average = Math.floor(sum / arr.length)
    return average
  }

  useEffect(() => {
    if (differences.length === 0) return
    const average = calcAverage(differences)
    socket.emit("userData", { ...user, timeDifference: average })
  }, [differences])

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
        <ServerPanel userLog={userLog} user={user} />
      </div>
      <div className="pt-10"></div>
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
