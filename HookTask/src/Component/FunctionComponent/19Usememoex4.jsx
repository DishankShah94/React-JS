import { useMemo, useState } from "react";

const Usememoex4 = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    const [text, setText] = useState("sachin");
    const Usememo = useMemo(function multipleCount() {
        console.log("multicount called");
        return count * 2
    }, [count])
    return (<>
        <h2>Usememo</h2>
        <h2>{count}</h2>
        <h2>{item}</h2>
        <h2>{text}</h2>
        <h2>{Usememo}</h2>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        <button onClick={() => setItem(item + 5)}>Update Item</button>
        <button onClick={() => setText("Virat")}>Update Text</button>
    </>);
}

export default Usememoex4;