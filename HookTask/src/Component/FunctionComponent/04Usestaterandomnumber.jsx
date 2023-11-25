import { useState } from "react";

const Usestaterandomnumber = () => {
    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.random() * 10
            }
        ]);
    };
    return (<>
        <div>
            <ul>  {click.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}</ul>
            <button onClick={addNumber}>Click Me</button>
        </div>

    </>);
}

export default Usestaterandomnumber;