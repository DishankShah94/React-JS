import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomHook from "../Hook/CustomHook";
import { registration } from "../Action";

const Registration = () => {
    const dispatch = useDispatch();
    const { state, setState } = useState({ formData: "" })
    const navigate = useNavigate();
    const { handleChange, inp, errors } = CustomHook({ "role": "2" }, {});
    let SaveData = () => {
        dispatch(registration(inp));
        navigate("/login");
    }
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header text-center">Signup</div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <input type="text" name="uname" placeholder="Enter User Name" className="form-control" onChange={handleChange} onBlur={handleChange} id="" required />
                                        {errors.unameError ? <span>This field is required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="email" name="uemail" placeholder="Enter Email Id" className="form-control" onChange={handleChange} onBlur={handleChange} id="" required />
                                        {errors.uemailError ? <span>This field is required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="password" name="password" placeholder="Enter password" className="form-control" onChange={handleChange} onBlur={handleChange} id="" required />
                                        {errors.passwordError ? <span>This field is required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" name="umobile" placeholder="Enter Mobile No" className="form-control" onChange={handleChange} onBlur={handleChange} id="" required />
                                        {errors.umobileError ? <span>This field is required</span> : <></>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <input type="button" value="register" onClick={SaveData} className='btn btn-info' /> &nbsp;
                                        <input type="reset" className='btn btn-warning' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Registration;