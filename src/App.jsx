import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [pomodoro, setPomodoro] = useState(0)
  const [short, setShort] = useState(0)
  const [long, setLong] = useState(0)
  const [isActive, setIsActive] = useState("")
  const [timerValue, setTimerValue] = useState("00:00")

  useEffect(() => {
    let timer = {}
    if (localStorage.getItem("timer")) {
      timer = JSON.parse(localStorage.getItem("timer"))
    } else {
      timer = {
        pomodoro: "10:00",
        short: "05:00",
        long: "15:00"
      }

      localStorage.setItem("timer", JSON.stringify(timer))
    }

    setPomodoro(timer.pomodoro)
    setShort(timer.short)
    setLong(timer.long)
    setIsActive("pomodoro")

    setTimerValue(timer.pomodoro)

  }, [])
  function handleClick(arg) {
    if (arg == "short") {
      setTimerValue(short)
    }
    if (arg == "long") {
      setTimerValue(long)
    }
    setIsActive(arg)
  }


  return (
    <div className='container bg-slate-200 p-5 h-dvh mx-auto'>
      <div className=' w-1/3 rounded-xl p-5 mx-auto bg-slate-500'>
        <h1 className='text-center pb-5 text-white font-bold text-4xl '>POMODORO</h1>
        <div className='text-center flex justify-between w-2/3 cursor-pointer pb-5 mx-auto'>
          <span onClick={() => { handleClick("pomodoro") }} className={`text-slate-900 font-bold text-lg p-2 ${isActive == "pomodoro" ? "bg-slate-600 rounded-xl  first-line:text-white" : ""}`}>Work</span>
          <span onClick={() => { handleClick("short") }} className={`text-slate-900 font-bold text-lg p-2 ${isActive == "short" ? "bg-slate-600 rounded-xl  first-line:text-white" : ""}`}>Short Break</span>
          <span onClick={() => { handleClick("long") }} className={`text-slate-900 font-bold text-lg p-2 ${isActive == "long" ? "bg-slate-600 rounded-xl  first-line:text-white" : ""}`}>Long Break</span>
        </div>
        <div>
          <div className='w-72 h-72 bg-slate-200 rounded-full mx-auto'>
            <h1 className='text-center text-8xl pt-16 text-slate-900 font-bold'>{timerValue}</h1>
            <p className=' text-center text-4xl mt-8 text-slate-900 cursor-pointer'>Start</p>
          </div>
        </div>
        <div className='text-slate-900'>
          <i className="fa-solid fa-gear cursor-pointer mt-5 text-4xl block text-center"></i>
        </div>
      </div>
    </div >
  )
}

export default App
