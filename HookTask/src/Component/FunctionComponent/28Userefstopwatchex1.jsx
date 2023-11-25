import { useEffect, useRef, useState } from "react";

const Userefstopwatchex1 = () => {
    const timeIdref = useRef(0);
    const [count, setCount] = useState(0);
    const startHandler = () => {
        if (timeIdref.current) return;
        timeIdref.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
            console.log("tick");
        }, 1000);
    }
    const stopHandler = () => {
        clearInterval(timeIdref.current);
        timeIdref.current = 0;
    }
    const resetHandler = () => {
        stopHandler()
        setCount(count => count = 0)
    }
    useEffect(() => {
        //cleanup function
        return () => {
            clearInterval(timeIdref.current)
        }
    }, [])
    return (<>
        <h1>Stop Watch</h1>
        <p>Time :{count}</p>
        <button onClick={timeIdref.current === 0 ? startHandler : stopHandler}>{timeIdref.current === 0 ? "start" : "stop"}</button>
        {/* <button onClick={stopHandler}>Stop</button> */}
        <button onClick={resetHandler}>Reset</button>
    </>);
}

export default Userefstopwatchex1;