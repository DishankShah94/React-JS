import { useCallback, useState } from "react";

const Usecallbackex3 = () => {
    const [input, setInput] = useState(1);
    const [light, setLight] = useState(true);
    const getItems = useCallback(() => {
        return [input + 10, input + 100];
    }, [input])
    const theme = {
        backgroundColor: light ? "white" : "grey",
        color: light ? "grey" : "white"
    }
    const items = getItems();
    return (<>

        <div style={theme}>
            <input type="number" name="" value={input} onChange={e => setInput(parseInt(e.target.value))} id="" />
            <button onClick={() => setLight(prevLight => !prevLight)}>{light ? "dark mode" : "light mode"}</button>
            <p>Item 1: {items[0]}</p>
            <p>Item 2: {items[1]}</p>
        </div>
    </>);
}

export default Usecallbackex3;