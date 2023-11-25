import { useCallback, useState } from "react";
import UsecallbackChild from "./UsecallbackChild";

const Usecallbackex1 = () => {
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const increment = () => {
        setCount((count) => count + 1);
    };
    const addTask = useCallback(() => {
        setTasks((t) => [...t, "New Task"])
    }, [tasks])
    return (<>
        <div>
            <div className="first">
                <UsecallbackChild tasks={tasks} addTask={addTask} />
            </div>
            <div className="second">
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    </>);
}

export default Usecallbackex1;