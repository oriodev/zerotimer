import React, { useCallback, useState } from "react"
import Slider from 'react-input-slider'

import { Timer } from "./Components/Timer"

const App = () => {
  const [workTime, setWorkTime] = useState({ x: 10 })
  const [ mode, setMode ] = useState('PAUSE') // PLAY, END

  const handleSliderChange = useCallback(( { x } ) => {setWorkTime( state => ({ ...state, x}) )}, []); 

  return (
    <div>
      <Timer 
        mode={mode}
        setMode={setMode}
        workTime={workTime.x}
      />
      {workTime.x} minutes
      <br />
      <Slider
        axis="x"
        x={workTime.x}
        onChange={handleSliderChange}
        xmin={5}
        xmax={90}
        xstep={5}
      />
      <br />
      <button 
        onClick={() => {
            setMode('PLAY') 
            // setTotalTime(workTime.x)
          }
        }
      >set worktime</button>
    </div>
  )
}

export default App