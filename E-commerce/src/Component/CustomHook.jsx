import { useState } from "react";

const CustomHook = (initvalue, inivalue) => {
    const [inp1, setInp1] = useState(initvalue)
    const [error1, setEroor1] = useState(inivalue)
    const handleChange1 = (e) => {
        setInp1({ ...inp1, [e.target.name]: e.target.value });
        if (e.target.value == "") {
            let SpanId1 = [e.target.name] + "Error";
            setEroor1({ ...error1, [SpanId1]: "This is field is required" });

        } else {
            setEroor1({ ...error1, [[e.target.name + "Error"]]: "" });
        }
    }
    const resetForm1 = () => {
        setInp1(initvalue);
    }
    return { handleChange1, inp1, setInp1, error1, resetForm1 };
}

export default CustomHook;