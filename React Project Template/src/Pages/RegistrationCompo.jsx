import React, { useState } from 'react';
import CustomHook from '../Hook/CustomHook';
import { useNavigate } from 'react-router-dom';

const RegistrationCompo = () => {
    const [message, setMessage] = useState("");
    // const [state, setState] = useState({ formData: "" })
    const { handleChange, inp, errors } = CustomHook({ "role": "2" }, {})
    const navigate = useNavigate();
    // const setData = (event) => {
    //     // setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
    const savedata = () => {
        if (!inp.uname || !inp.uemail || !inp.upass || !inp.umobile) {
            setMessage("please enter all fields")
        }
        else {
            fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", //sent request
                    "Accept": "application/json",
                },
                body: JSON.stringify(inp)
            }).then((res) => { console.log(res); res.json() }).then((response) => {
                console.log(response);
                navigate("/login");
            })
        }

    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Signup</div>
                            <div className="card-body">

                                <form>
                                    {JSON.stringify(inp)}
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={handleChange} onBlur={handleChange} name="uname" required />
                                            {errors.unameError ? <span>This field is required</span> : ""}
                                        </div>

                                    </div>
                                    <div className='row mt-3'>
                                        <div className="col">
                                            <input type="email" placeholder='Enter Email Address' className='form-control' onChange={handleChange} onBlur={handleChange} name='uemail' required />
                                            {errors.uemailError ? <span>This field is required</span> : ""}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="upass" required />
                                            {errors.upassError ? <span>This field is required</span> : ""}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input type="tel" placeholder='Enter Mobile Number' className='form-control' onChange={handleChange} onBlur={handleChange} name='umobile' required />
                                            {errors.umobileError ? <span>This field is required</span> : ""}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">

                                            <input type="button" value="submit" className='btn btn-info' onClick={savedata} /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                    <p>{message}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationCompo;