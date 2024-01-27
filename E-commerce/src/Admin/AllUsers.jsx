import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AllUsers = () => {
    let [allUsers, setAllUsers] = useState([])
    let [loader, setLoader] = useState(false)
    let fetchData = async () => {
        // fetch("http://localhost:5000/users").then((res)=>res.json()).then((response)=>{ 
        //   // setAllUsers(response) 
        // })
        axios.get('http://localhost:5000/allProducts')
            .then(function (response) {
                // handle success
                // console.log(response.data);
                let usersdatastr = response.data.map((data) => {
                    console.log(data);
                    return <tr key={data.id}>
                        <td><img style={{ width: "350px", height: "300px" }} src={`${process.env.PUBLIC_URL}/${data.image}`} alt={`Product ${data.id}`} /></td>
                        <td>{data.price}</td>
                        <td>
                            <Link to={`/admin/edituser/${data.id}`}>Edit</Link></td>
                        <td>
                            <button onClick={() => deletedata(data.id)}>delete</button>
                        </td>

                    </tr>
                })
                // console.log(usersdatastr);
                setAllUsers(usersdatastr)
                setLoader(true)
            })
        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // })
        // .finally(function () {
        //   // always executed
        // });
    }
    let deletedata = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/allProducts/${id}`)
            console.log(id);
            setAllUsers(allUsers.filter((post) => post.id !== id));
            fetchData();
        } catch (error) {
            console.log("error", error);
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="row">
                <div className="col">
                    {loader ? <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {allUsers}
                        </tbody>
                    </table> : <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            No users found
                        </tbody>
                    </table>}

                </div>
            </div>
        </>
    );
}

export default AllUsers;
