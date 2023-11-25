import { useEffect, useState } from "react";

const Useeffectex2 = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count])
    return (<>
        <span>Count : {count}</span>
        <button onClick={() => setCount(() => count + 1)}>+</button>
        <span>Calculation: {calculation}</span>
    </>);
}

export default Useeffectex2;