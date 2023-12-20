import axios, { all } from 'axios';
import React, { useEffect, useState } from 'react';
const AllUsers = () => {
  let [allUsers, setAllUsers] = useState([]);
  let [loader, setLoader] = useState(false);
  let fetchData = async () => {
    axios.get('http://localhost:5000/users')
      .then(function (response) {
        console.log(response.data);
        let userdatastr = response.data.map((data) => {
          console.log(data);
          return <tr key={data.id}><td>{data.uname}</td></tr>
        })
        console.log(userdatastr);
        setAllUsers(userdatastr);
        setLoader(true);
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="row box">
        <div className="col">
          {loader ? <table>
            <thead>
              <tr>
                <th>User Name</th>
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
              No Users Found
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default AllUsers;