import React, { useState } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import CustomHook from '../Hook/CustomHook'
import { useCookies } from 'react-cookie';
const LoginCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    // const setData = (event) => {
    //     setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
    const { handleChange, inp, errors } = CustomHook({}, {})
    // const [user, setUser] = useState([]);
    const [loginError, setLoginError] = useState(false);
    const [message, setMessage] = useState("");
    const [cookies, setCookies] = useCookies(['name']);

    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/users?uname=${inp.uname}&password=${inp.password}`)
            // fetch(`http://localhost:5000/users?`)
            .then((res) => res.json())
            .then((data) => {
                console.log(inp.uname);
                console.log(data);
                // const usernames = data.map(user => user.uname);
                // console.log(usernames);
                // const passwords = data.map(pass => pass.upass);
                // console.log(passwords);
                // const user = data.find((user) => user.uname === inp.uname && user.upass === inp.upass);
                if (data.length > 0) {
                    console.log(data[0].role);
                    setLoginError(false)
                    setCookies('loggedin', 'active');
                    if (data[0].role == 1) {
                        setCookies('admin', 'true');
                        navigate('/admin')
                    } else {
                        // setLoginError(true)
                        navigate('/')
                    }
                } else {
                    setLoginError(true)
                }
                // if (user) {
                //     // If a matching user is found, navigate to the desired location
                //     navigate('/logout');

                //     // If no matching user is found, you can handle this case (e.g., show an error message)
                //     console.log("Invalid username or password");
                //     // alert('Invalid username or password')
                //     setMessage("Invalid Login and Password");
                // }
            })

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            <div className="card-body">

                                <form onSubmit={login}>
                                    {JSON.stringify(inp)}
                                    <div className="row">
                                        <div className="col">
                                            {/* <label>Username </label> */}
                                            {/* <input type="text" placeholder='Enter User Name' className='form-control' onChange={(event)=>{
                                                setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}}))
                                            }} name="uname" required /> */}
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={handleChange} onBlur={handleChange} name="uname" required />
                                            {errors.unameError ? <span>This field is required</span> : ""}
                                            {/* {JSON.stringify(state)} */}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">

                                            {/* <label>Password </label> */}
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="password" required />
                                            {errors.passwordError ? <span>This field is required</span> : ""}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">

                                            <input type="submit" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                    {<p>{message}</p>}
                                </form>
                                <div className="row">
                                    <div className="col">
                                        <Link to="/signup">Click here to create new account</Link>
                                    </div>
                                </div>
                                {loginError ? <p className='alert alert-danger'>Invalid user</p> : ""}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;