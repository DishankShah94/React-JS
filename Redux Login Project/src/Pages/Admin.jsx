import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allData } from "../Action";

const Admin = () => {
    const dispatch = useDispatch();
    // const [allUsers, setAllUsers] = useState({});
    const allUsers1 = useSelector((state) => state.users);

    // useEffect should have an empty dependency array to ensure it runs only once
    useEffect(() => {
        // Dispatch the action to fetch data when the component mounts
        dispatch(allData());
    }, [dispatch]);
    return (
        <div className="row box">
            <div className="col">
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
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
    );

}

export default Admin;
