import React, { useState } from 'react';
import { Link, useHref, useNavigate } from 'react-router-dom';
import CustomHook from '../Hook/CustomHook'
const LoginCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    // const setData = (event) => {
    //     setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
    const { handleChange, inp, errors } = CustomHook({ "role": "1" }, {})
    // const [user, setUser] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/users?email=${inp.uname}&password=${inp.upass}`)
            // fetch(`http://localhost:5000/users?`)
            .then((res) => res.json())
            .then((data) => {
                console.log(inp.uname);
                console.log(data);
                // const usernames = data.map(user => user.uname);
                // console.log(usernames);
                // const passwords = data.map(pass => pass.upass);
                // console.log(passwords);
                const user = data.find((user) => user.uname === inp.uname && user.upass === inp.upass);

                if (user) {
                    // If a matching user is found, navigate to the desired location
                    navigate('/logout');
                } else {
                    // If no matching user is found, you can handle this case (e.g., show an error message)
                    console.log("Invalid username or password");
                    // alert('Invalid username or password')
                    setMessage("Invalid Login and Password");
                }
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
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="upass" required />
                                            {errors.upassError ? <span>This field is required</span> : ""}
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;