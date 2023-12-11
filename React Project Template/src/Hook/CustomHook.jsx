import { useState } from "react";

const CustomHook = (initValue, initError) => {
    const [inp, setInp] = useState(initValue);
    const [errors, setErrors] = useState(initError);

    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))

        if (e.target.value === "") {
            let SpanId = [e.target.name] + "Error";
            setErrors({ ...errors, [SpanId]: "This field is required" })
        }
        else {
            // setErrors({ ...errors, "unameError": "" })
            setErrors({ ...errors, [[e.target.name + "Error"]]: "" })
        }
    }
    return { handleChange, inp, errors };
}

export default CustomHook;