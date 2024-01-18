import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { edituser } from "../Action";
import { useDispatch } from "react-redux";

const EditUser = () => {

    let [UserById, setUserById] = useState({ uname: "", password: "" });
    let [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { id } = useParams();
    const edit = () => {
        dispatch(edituser(id, UserById,navigate))
    }
    return (<>
        <div className="row box">
            <div className="col">
                {loader ? <form>
                    {/* {JSON.stringify(inp)} */}
                    <div className="row">
                        <div className="col">
                            <h2 className="text-center mt-3">Update</h2>
                            <input type="text" placeholder='Enter User Name' className='form-control w-50 d-block mx-auto' value={UserById.uname} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="uname" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input className='form-control w-50 d-block mx-auto' placeholder='Enter your Password' type="password" value={UserById.password} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="password" required />
                        </div>
                        {/* {JSON.stringify(UserById)} */}
                    </div>
                    <div className="row mt-3" >
                        <div className="col text-center">
                            <input type="button" value="Udpate" onClick={edit} className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>

                    </div>
                </form> : "no data found"}
            </div>
        </div>
    </>);
}

export default EditUser;

