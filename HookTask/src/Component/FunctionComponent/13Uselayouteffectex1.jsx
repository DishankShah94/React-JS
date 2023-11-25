import { useLayoutEffect, useState } from "react";

const Uselayouteffectex1 = () => {
    // When you click the page*, the state changes immediately (value resets to 0), 
    // which re-renders the component, and then the effect runs – which sets the value to some random number, 
    // and re-renders again.
    const [value, setValue] = useState(0);
    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200);
        }
    }, [value]);
    console.log('render', value);
    return (<>
        <div onClick={() => setValue(0)}>value: {value}</div>
    </>);
}

export default Uselayouteffectex1;