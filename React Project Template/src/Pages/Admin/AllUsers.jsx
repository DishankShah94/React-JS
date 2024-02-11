import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AllUsers = () => {
  let [allUsers, setAllUsers] = useState([]);
  let [loader, setLoader] = useState(false);
  let fetchData = async () => {
   await axios.get('http://localhost:5000/users')
      .then(function (response) {
        console.log(response.data);
        let userdatastr = response.data.map((data) => {
          console.log(data);
          return <tr key={data.id}><td>{data.uname}</td>
            <td><Link to={`/admin/editUser/${data.id}`}>Edit</Link></td>
            <td><button onClick={() => deletePost(data.id)}>Delete</button></td>
          </tr>

        })
        // console.log(userdatastr);
        setAllUsers(userdatastr);
        setLoader(true);
      })
  }
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      console.log("Post deleted:", id);
      // setAllUsers(allUsers.filter((post) => post.id !== id));
      fetchData();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/users/${id}`);
  //     console.log(id);
  //     fetchData();
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };

  useEffect(() => {
    fetchData();
    // handleDelete();
  }, [])
  // useCallback(() => {
  //   handleDelete();
  // }, [handleDelete])
  return (
    <>
    <div className="row box">
      <div className="col">
        {loader ? <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
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
};

export default AllUsers;