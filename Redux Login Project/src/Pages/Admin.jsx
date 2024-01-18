import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allData, deleteUser } from "../Action";
import { Link, useNavigate, useParams } from "react-router-dom";

// Import the action type for better code organization
// import { ALLUSERS } from "../Action"; // Adjust the path if needed

const Admin = () => {
    const dispatch = useDispatch();

    // Use useSelector to access the users data from the Redux store
    const allUsers1 = useSelector((state) => state.products.users);

    useEffect(() => {
        // Dispatch the action to fetch data when the component mounts
        dispatch(allData());
    }, [dispatch]);
    const deletedata = (id) => {
        dispatch(deleteUser(id))
            .then(() => {
                console.log("Delete successfully");
                dispatch(allData());
            })
            .catch((error) => {
                console.log("Something is wrong", error);
            });
    }
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="row">
                <div className="col">
                    <table className='table table-striped table-hover w-100'>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Check if allUsers1 is defined before using map */}
                            {allUsers1 && allUsers1.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.uname}</td>
                                    <td>{data.uemail}</td>
                                    <td>{data.password}</td>
                                    <td>{data.umobile}</td>
                                    <td>
                                        <Link to={`/edituser/${data.id}`}>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => deletedata(data.id)}>Delete</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                    {/* Display a message if no users are found */}
                    {allUsers1 && allUsers1.length === 0 && (
                        <table>
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>No users found</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Admin;

