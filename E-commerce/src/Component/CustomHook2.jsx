import { useState } from "react";

const CustomHook2 = (initvalue, inivalue) => {
    const [inp2, setInp2] = useState(initvalue)
    const [error2, setEroor2] = useState(inivalue)
    const handleChange2 = (e) => {
        setInp2({ ...inp2, [e.target.name]: e.target.value });
        if (e.target.value == "") {
            let SpanId2 = [e.target.name] + "Error";
            setEroor2({ ...error2, [SpanId2]: "This is field is required" });

        } else {
            setEroor2({ ...error2, [[e.target.name + "Error"]]: "" });
        }
    }
    const resetForm2 = () => {
        setInp2(initvalue);
    }
    return { handleChange2, inp2, setInp2, error2, resetForm2 };
}

export default CustomHook2;