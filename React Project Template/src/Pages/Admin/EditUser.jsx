import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let [UsserById, setUserById] = useState({ uname: "" });
    let [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    let { userid } = useParams();
    let fetchData = async () => {
        axios.get(`http://localhost:5000/users/${userid}`)
            .then(function (response) {
                console.log(response.data);
                setUserById(response.data);
                setLoader(true);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    let updatedata = () => {
        fetch(`http://localhost:5000/users/${userid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            },
            body: JSON.stringify(UsserById)
        }).then((res) => { console.log(res); return res.json() }).then((response) => {
            console.log(response);
            navigate("/admin/allusers")
        })
    }
    return (<>
        <div className="row box">
            <div className="col-8">
                {loader ? <from>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="uname" className="form-control" value={UsserById.uname} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} id="" required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <input className='form-control' placeholder='Enter your Password' type="password" value={UsserById.password} onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="password" required />
                        </div>
                    </div>
                    {JSON.stringify(UsserById)}

                    <div className="row mt-3">
                        <div className="col text-center">
                            <input type="button" value="Udpate" onClick={updatedata} className='btn btn-info' /> &nbsp;
                            <input type="reset" className='btn btn-warning' />
                        </div>

                    </div>
                </from> : "no data found"}
            </div>
        </div>
    </>);
}

export default EditUser;