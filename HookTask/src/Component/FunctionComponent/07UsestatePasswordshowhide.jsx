import { useState } from "react";

const UsestatePasswordshowhide = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    return (<>
        <input type={isPasswordVisible ? "text" : "password"} />
        <button onClick={() => { setIsPasswordVisible((previousState) => !previousState) }}>{isPasswordVisible ? "Hide" : "Show"}</button>
    </>);
}

export default UsestatePasswordshowhide;