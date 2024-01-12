import React from 'react';
import { useState } from 'react';
const CustomHook = (initValue, initError) => {
    const [inp, setInp] = useState(initValue)
    const [errors, setError] = useState(initError);
    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let SpanId = [e.target.name] + "Error";
            setError({ ...errors, [SpanId]: "This field is required" })
        } else {
            setError({ ...errors, "unameError": "" , "uemailError":"","passwordError":"", "umobileError":""})

        }
    }
    return { handleChange, inp, errors };
};

export default CustomHook;