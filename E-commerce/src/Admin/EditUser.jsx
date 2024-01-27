import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let [UserById, setUserById] = useState({ price: "" });
    let [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();
    let fetchData = async () => {
        axios.get(`http://localhost:5000/allProducts/${id}`)
            .then(function (response) {
                console.log(response.data);
                setUserById(response.data);
                setLoader(true)
            })
    }
    let updateData = () => {
        fetch(`http://localhost:5000/allProducts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",  // sent request
                "Accept": "application/json",   // expected data sent back
            },
            body: JSON.stringify(UserById)
        }).then((res) => { console.log(res); return res.json() }).then((response) => {
            console.log(response.data);
            // setUserById(response.data)
            navigate("/admin/allusers")
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (<>
        <div className="row box">
            <div className="col-8">
                {loader ? <form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="file" className="form-control my-3" onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.files[0] })) }} name="image" id="" />
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col">
                                <input className='form-control' placeholder='Price' type="text" onChange={(e) => { setUserById((inp) => ({ ...inp, [e.target.name]: e.target.value })) }} name="price" required />
                            </div>
                            {/* {JSON.stringify(UserById)} */}
                        </div>
                        <div className="row mt-3">
                            <div className="col text-center">
                                <input type="button" value="Update" onClick={updateData} className='btn btn-info' /> &nbsp;
                                <input type="reset" className='btn btn-warning' />
                            </div>

                        </div>
                    </div>

                </form> : "no data found"}
            </div>
        </div>
    </>);
}

export default EditUser;
