import axios from "axios";
import { ALLUSERS, FETCH_PRODUCTS } from "./types";
import { LOGIN } from "./types";
import { useState } from "react";

export const loginCom = (data, navigate, msg) => {

    return async (dispatch) => {
        fetch(`http://localhost:5000/users?uemail=${data.formData.uemail}&password=${data.formData.password}`).then((res) => { return res.json() }).then((response) => {
            dispatch({
                type: LOGIN,
                payload: response.data,
            });
            console.log(data.formData.uemail);
            if (response.length > 0) {
                console.log(response[0].role);
                // setLoginError(false)
                // setCookie('loggedin', "active");
                if (response[0].role == 1) {
                    // setCookie('admin', "true");
                    console.log("admin");
                    navigate("/admin")

                } else {
                    console.log("user");
                    navigate("/");

                }
            } else {
                // setLoginError(true)
                console.log("user not found");
                msg();
                data.setData((prevData) => ({
                    ...prevData,
                    formData: {
                        ...prevData.formData,
                        uemail: "",
                        password: "",
                    },
                }));
            }
        }).catch((error) => {
            // setServerError(true)
            // console.log(error);
        })
    }
}
export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data); // Check the data returned by the API
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response.data,
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };
};
export const registration = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/users', data);
            // const response = await axios.post('http://localhost:3004/users', data);

            //   const responseFetch =  await fetch(url, {
            //     method: "POST", // *GET, POST, PUT, DELETE, etc.
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //         "uname": "test",
            //         "email": "test@mail.com",
            //         "pass": "456",
            //         "role": 2
            //       }), // body data type must match "Content-Type" header
            //   });





            console.log(response.data); // Check the data returned by the API
            // dispatch({
            //     type: FETCH_PRODUCTS,
            //     payload: response.data,
            // });
        } catch (error) {
            console.log('Error:', error);
        }
    };
};
export const allData = () => {
    return async (dispatch) => {

        axios.get('http://localhost:5000/users')
            .then(function (response) {

                let usersdata = response.data.map((data) => {
                    console.log(data);
                    return <tr key={data.id}>
                        <td>{data.uname}</td>
                        <td>{data.uemail}</td>
                        <td>{data.password}</td>
                        <td>{data.umobile}</td>
                    </tr>
                })
                dispatch({
                    type: ALLUSERS,
                    payload: response.data,
                });
            })
    };
}

