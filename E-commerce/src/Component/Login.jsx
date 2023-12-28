import { useState } from 'react';
import '../Component/assests/login.css';
import CustomHook from './CustomHook';
import CustomHook2 from './CustomHook2';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [state, setState] = useState(true)
    const [remove, setRemove] = useState()
    const [loginError, setLoginError] = useState(false)
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { handleChange1, inp1, setInp1, error1, resetForm1 } = CustomHook({ "role": "1", "name1": "", "password1": "" }, {})
    const { handleChange2, inp2, setInp2, error2, resetForm2 } = CustomHook2({ "role": "2", "name": "", "password": "", "email": "" }, {})
    const data = (e) => {
        e.preventDefault();
        setState(!state)
    }
    const Submit1 = (event) => {
        event.preventDefault();
        // if (!inp1.name1 || !inp1.password1) {
        //     setMessage("This field is required");
        // } else {
        //     console.log("Submit1:", inp1);
        // }


    }
    const savedata1 = () => {
        fetch(`http://localhost:5000/users?name1=${inp1.name}&password1=${inp1.password}`)
            .then((res) => { return res.json() })
            .then((response) => {
                console.log(response.length);
                if (response.length > 0) {
                    console.log(response[0].role);

                    // setCookie('loggedin', "active");

                    if (response[0].role === 1) {
                        // setCookie('admin', "true");
                        // navigate("/admin")
                        // resetForm1()
                        console.log("dddd");
                    } else {
                        // navigate("/")
                        // resetForm1()
                        console.log("vvvv");
                    }
                } else {
                    // setLoginError(true)
                    console.log("called");
                }
            }).catch((error) => {
                // setServerError(true)
            })

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
    const savedata = (e) => {
        if (!inp2.name || !inp2.password || !inp2.email) {
            setMessage("This field is required")
        } else {
            fetch(' http://localhost:5000/users', {
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
        <section className="mt">
            <div class="cont">
                {/* {JSON.stringify(inp1)} */}
                {state ? <>
                    <form onSubmit={Submit1}>
                        <div class="form sign-in col-70">
                            <h2 className="lgn-text">Welcome</h2>
                            <label className="fnt">
                                <span>Name</span>
                                <input type="text" className="lng-input" value={inp1.name1} name="name1" onChange={handleChange1} onBlur={handleChange1} />

                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className="lng-input" value={inp1.password1} name="password1" onChange={handleChange1} onBlur={handleChange1} />
                            </label>
                            <p class="forgot-pass">Forgot password?</p>
                            <button type="button" class="submit lg-btn" onClick={savedata1}>Sign In</button>
                        </div>
                        <div class="sub-cont col-30">
                            <div class="img">
                                <div class="img__text m--up">

                                    <h3>Don't have an account? Please Sign up!</h3>
                                </div>
                                <button onClick={data} className="d-block mx-auto lg-btn">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </> : <>
                    <form onSubmit={Submit2}>
                        <div class="form sign-up col-70">
                            <h2 className="lgn-text">Create your Account</h2>
                            <label className="fnt">
                                <span>Name</span>
                                <input type="text" className="lng-input" name="name" value={inp2.name} onChange={handleChange2} onBlur={handleChange2} />
                                {/* {error2.nameError ? <span>This field is Required</span> : ""} */}
                            </label>
                            <label className="fnt">
                                <span>Email</span>
                                <input type="email" className="lng-input" name="email" value={inp2.email} onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <label className="fnt">
                                <span>Password</span>
                                <input type="password" className="lng-input" name="password" value={inp2.password} onChange={handleChange2} onBlur={handleChange2} />
                            </label>
                            <button type="button" class="submit lg-btn" onClick={savedata}>Register</button>
                            {/* <p>{message}</p> */}
                        </div>
                        <div class="sub-cont col-30">
                            <div class="img">
                                <div class="img__text m--in">

                                    <h3>If you already has an account, just sign in.</h3>
                                </div>
                                <button onClick={data} className="d-block mx-auto lg-btn">Sign In</button>
                            </div>
                        </div>
                    </form>
                </>}
            </div>
        </section >
    </>);
}


export default Login;