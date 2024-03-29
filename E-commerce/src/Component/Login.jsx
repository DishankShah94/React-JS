import React, { useEffect, useState } from "react";
// import '../Component/assests/login.css'

import { useNavigate } from "react-router-dom";
import CustomHook1 from "./Hooks/CustomHook";
import CustomHook2 from "./Hooks/CustomHook2";

const Login = () => {
    const [state, setState] = useState(true)
    const [remove, setRemove] = useState()
    const [loginError, setLoginError] = useState(false)
    const navigate = useNavigate();

    const data = () => {
        setState(!state)
    }
    const { handleChange1, inp1, setInp1, error1, resetForm1 } = CustomHook1({ "role": "1", "name1": "", "password1": "" }, {})
    const { handleChange2, inp2, setInp2, error2, resetForm2 } = CustomHook2({ "role": "2", "name": "", "password": "", "email": "" }, {})

    const [message, setMessage] = useState('');

    const Submit1 = (event) => {
        event.preventDefault();
        // if (!inp1.name1 || !inp1.password1) {
        //     setMessage("This field is required");
        // } else {
        //     console.log("Submit1:", inp1);
        // }


    }

    const Submit2 = (event) => {
        event.preventDefault();
        if (!inp2.name || !inp2.password || !inp2.email) {
            setMessage("This field is required");
        } else {
            console.log("Submit2:", inp2);
            // Add your login logic here
        }
    }

    const savedata1 = () => {
        fetch(`http://localhost:5000/users?name=${inp1.name1}&password=${inp1.password1}`)
            .then((res) => res.json())
            .then((response) => {
                if (response.length > 0) {
                    if (response[0].role === "1") {
                        navigate("/admin")
                    } else {
                        console.log("Regular user login");
                        navigate("/buy");
                    }
                } else {
                    console.log("User not found");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error
            });
    }
    const savedata = (e) => {
        if (!inp2.name || !inp2.password || !inp2.email) {
            setMessage("This field is required")
        } else {
            fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",  // sent request
                    "Accept": "application/json",   // expected data sent back
                },
                body: JSON.stringify(inp2),
            }).then((res) => {
                console.log(res);
                return res.json();
            }).then((responce) => {
                console.log(responce);
                resetForm2()
            })

        }
    }


    return (<>
        <section className="mt1">
            <div class="cont1">
                {/* {JSON.stringify(inp1)} */}
                {state ? <>
                    <form onSubmit={Submit1}>
                        <div class="form1 sign-in col-70">
                            <h2 className="lgn-text">Welcome</h2>
                            <label className="fnt">
                                <span>Name</span>
                                <input type="text" className="lng-input1" value={inp1.name1} name="name1" onChange={handleChange1} onBlur={handleChange1} />

                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className="lng-input1" value={inp1.password1} name="password1" onChange={handleChange1} onBlur={handleChange1} />
                            </label>
                            <p class="forgot-pass">Forgot password?</p>
                            <button type="button" class="submit1 lg-btn1" onClick={savedata1}>Sign In</button>
                            <button onClick={data} className=" submit1 lg-btn1">Sign Up</button>

                        </div>
                        {/* <div class="sub-cont col-30">   
                            <div class="img">
                                <div class="img__text m--up">

                                    <h3>Don't have an account? Please Sign up!</h3>
                                </div>
                            </div>
                        </div> */}
                    </form>
                </> : <>
                    <form onSubmit={Submit2}>
                        <div class="form1 sign-up col-70">
                            <h2 className="lgn-text">Create your Account</h2>
                            <label className="fnt">
                                <span>Name</span>
                                <input type="text" className="lng-input1" name="name" value={inp2.name} onChange={handleChange2} onBlur={handleChange2} />
                                {/* {error2.nameError ? <span>This field is Required</span> : ""} */}
                            </label>
                            <label className="fnt">
                                <span>Email</span>
                                <input type="email" className="lng-input1" name="email" value={inp2.email} onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className=" lng-input1" name="password" value={inp2.password} onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <button type="button" class="submit1 lg-btn1" onClick={savedata}>Register</button>
                            {/* <p>{message}</p> */}
                            <button onClick={data} className="d-block mx-auto lg-btn1">Sign In</button>

                        </div>
                        {/* <div class="sub-cont col-30">
                            <div class="img">
                                <div class="img__text m--in">

                                    <h3>If you already has an account, just sign in.</h3>
                                </div>
                            </div>
                        </div> */}
                    </form>
                </>}
            </div>
        </section>
    </>);
}
export default Login;
