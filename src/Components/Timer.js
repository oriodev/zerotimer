import React from "react"
import { useState, useEffect } from "react"

export const Timer = ({ mode, setMode, workTime }) => {

  console.log('top of timer flag')
  console.log('totalTime', workTime)

  const [ minutesLeft, setMinutesLeft ] = useState(0)
  const [ secondsLeft, setSecondsLeft ] = useState(0)

  useEffect(() => {

    console.log('seconds left', secondsLeft)
    console.log('start', mode)

    if (mode === 'PLAY') {

      // starts timer
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft => secondsLeft - 1)
      }, 1000)

      // reach end of the timer
      if (minutesLeft === 0 && secondsLeft === 0) {
        clearInterval(interval)
        setMode('END')
      }

      // handles end of a minute
      if (minutesLeft > 0 && secondsLeft === 0) {
        setMinutesLeft(minutesLeft => minutesLeft - 1)
        setSecondsLeft(59)
      }

      return () => clearInterval(interval)

    }

  }, [minutesLeft, secondsLeft, mode])

  return (
    <h3>
      { minutesLeft < 10 ? '0' + minutesLeft : minutesLeft } : { secondsLeft < 10 ? '0' + secondsLeft  : secondsLeft }
    </h3>
  )
}