import { useState } from "react";

const CustomHook = (initValue, initError, initError2) => {
    const [inp, setInp] = useState(initValue);
    const [errors, setErrors] = useState(initError);
    const [errors2, setErrors2] = useState(initError2);

    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
       
        if (e.target.value === "") {
            let SpanId = [e.target.name] + "Error";
            let SpanId2 = [e.target.name] + "Error";
            setErrors({ ...errors, [SpanId]: "This field is required" })
            setErrors2({ ...errors2, [SpanId2]: "This field is required" })
        }
        else {
            setErrors({ ...errors, "unameError": "" })
            setErrors2({ ...errors2, "upassError": "" })
        }
    }
    return { handleChange, inp, errors, errors2 };
}

export default CustomHook;