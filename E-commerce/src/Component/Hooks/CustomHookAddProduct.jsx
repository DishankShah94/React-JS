import { useState } from "react";

const CustomHookAddProduct = (initValue, iniError) => {
    const [inp, setInp] = useState(initValue);
    const [error, setError] = useState(iniError);
    const handleChange = (e) => {
        setInp((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            let SpanId = [e.target.name] + "Error";
            setError({ ...error, [SpanId]: "This field is required" });
        }
        else {
            console.log("inside else condition");
            setError({ ...error, [[e.target.name + "Error"]]: "" });
        }
    }
    const resetForm = () => {
        setInp(initValue);
    }
    return { handleChange, inp, setInp, error, resetForm };
}

export default (CustomHookAddProduct);
