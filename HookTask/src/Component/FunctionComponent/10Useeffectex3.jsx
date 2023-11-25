import { useEffect, useState } from "react";

const Useeffectex3 = () => {
    const [input, setInput] = useState("");
    const [isValid, setIsValid] = useState(false);
    let inputHandler = (e) => {
        setInput(e.target.value);
    }
    useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
            setIsValid(false)
        }
        else {
            setIsValid(true)
        }
    }, [input])
    return (<>
        <h3>Running on state change: validating input field</h3>
        <form action="">
            <label htmlFor="">Write something (more than 5 non numerical characters is a valid input)</label><br />
            <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
        </form>
        <br />
        <p style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem', width: '20rem' } : { backgroundColor: 'lightpink', padding: '.5rem', width: '20rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</p>

    </>);
}

export default Useeffectex3;