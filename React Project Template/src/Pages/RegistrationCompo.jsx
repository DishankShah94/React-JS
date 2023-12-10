import React from 'react';
import CustomHook from '../Hook/CustomHook';

const RegistrationCompo = () => {
    // const [state, setState] = useState({ formData: "" })
    const { handleChange, inp, errors } = CustomHook({}, {})
    // const setData = (event) => {
    //     // setState((data) => ({ formData: { ...data.formData, [event.target.name]: event.target.value } }))
    // }
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
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" onChange={handleChange} onBlur={handleChange} name="pass" required />
                                            {errors.upassError ? <span>This field is required</span> : ""}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">

                                            <input type="submit" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
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