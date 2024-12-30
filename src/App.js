import "./App.css";
import { useRef, useState } from "react";

function App() {
  // const [seconds, setSeconds] = useState(0);
  // const [minutes, setMinutes] = useState(0);
  // const [hours, setHours] = useState(0);

  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const currentTimer = useRef(null);

  const startFunction = () => {
    // currentTimer.current = setInterval(()=>{
    //   setSeconds((prevSeconds)=>{

    //     if(prevSeconds >= 59){
    //       setMinutes(async(prevMinutes)=>{

    //         if(prevMinutes >= 59 ){
    //            setHours((prevHours)=>prevHours+1)
    //           return 0
    //         }
    //         return prevMinutes + 1

    //       })
    //       return 0
    //     }
    //     return prevSeconds + 10
    //   })
    // },1000)

    currentTimer.current = setInterval(() => {
      setTimer((timer) => {
        let { seconds, minutes, hours } = timer;

        if (seconds >= 59) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes >= 59) {
          minutes = 0;
          hours += 1;
        }
        seconds+=1;

        return { seconds, minutes, hours };
      });
    }, 1000);
  };

  const stopFunction = () => {
    clearInterval(currentTimer.current);
    currentTimer.current = null; 
  };

  const resetFunction = () => {
    clearInterval(currentTimer.current);
    currentTimer.current = null;
    // setSeconds(0);
    // setMinutes(0);
    // setHours(0);

    setTimer({ seconds: 0, minutes: 0, hours: 0 })
  };

  return (
    <>
      <div className="container">
        <h1>Stop Watch</h1>
        <div className="childContainer">
          <button onClick={startFunction}>Start</button>
          <button onClick={stopFunction}>Stop</button>
          <button onClick={resetFunction}>Reset</button>
        </div>
        <div className="timer">
          {/* Timer: {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")} */}
          {timer.hours.toString().padStart(2, "0")}:{timer.minutes.toString().padStart(2, "0")}:{timer.seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </>
  );
}

export default App;
