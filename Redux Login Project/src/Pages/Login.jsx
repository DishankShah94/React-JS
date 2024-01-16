import { useState } from "react"
import { loginCom } from "../Action"
import { Navigate, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [state, setState] = useState({ formData: "" })
    const [loginError, setLoginError] = useState(false)
    const [serverError, setServerError] = useState(false)
        const setData = (event) => {
        setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    }

    // setMessage(message);
    let Login = (event) => {
        event.preventDefault();
        event.target.reset();
        // Navigate("/login");
    }
    const msger = () => {
        setMessage("Please enter valid email id and password");
    }
    const savedata = () => {
        dispatch(loginCom(state, navigate, msger)) 
        
    }

    return (<>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4 offset-lg-4">
                    <div className="card">
                        <div className="card-header text-center">Login</div>
                        {serverError ? <div className="card-body"> <div className="row"><div className="col">Please turn on DB Server</div></div> </div> : <div className="card-body">
                            <form onSubmit={Login}>
                                <div className="row">
                                    <div className="col">
                                        {/* <label>Username </label> */}
                                        {/* <input type="text" placeholder='Enter User Name' className='form-control' onChange={(event)=>{
                                                setState((data)=>({formData:{...data.formData,[event.target.name]:event.target.value}}))
                                            }} name="uname" required /> */}
                                        <input type="email" placeholder='Enter Email Id' className='form-control' onChange={setData} name="uemail" required />

                                        {/* {JSON.stringify(state)} */}
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col">

                                        {/* <label>Password </label> */}
                                        <input className='form-control' placeholder='Enter your Password' type="password" onChange={setData} name="password" required />
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">

                                        <input type="submit" onClick={savedata} className='btn btn-info' /> &nbsp;
                                        <input type="reset" className='btn btn-warning' />
                                    </div>

                                </div>
                                <h3 className="text-center">{message}</h3>
                            </form>
                            <div className="row">
                                <div className="col">
                                    {/* <Link to="/signup">Click here to create new account</Link> */}
                                </div>
                            </div>
                            {loginError ? <p className='alert alert-danger'>Invalid user</p> : ""}
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Login;
