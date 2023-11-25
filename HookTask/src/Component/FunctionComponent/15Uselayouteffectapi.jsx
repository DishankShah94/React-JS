import { useEffect, useLayoutEffect, useState } from "react";

const Uselayouteffectapi = () => {

    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    useLayoutEffect(() => {
        const fetchdata = async () => {
            const url = 'https://randomuser.me/api/';
            const response = await fetch(url);
            const result = await response.json();
            setData(result.results[0]);
        }
        fetchdata();
    }, [])

    useEffect(() => {
        const fetchdata = async () => {
            const url = 'https://randomuser.me/api/';
            const response = await fetch(url);
            const result = await response.json();
            setData2(result.results[0]);
        }
        fetchdata();
    }, [])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            color: "blue",
        }}>
            <img src={data.picture?.medium} style={{ width: "300px" }} alt="" />
            <p style={{ margin: "2px" }}>
                name: {data.name?.first} {data.name?.last}
            </p>
            <p style={{ margin: "2px" }}>
                age:{data.dob?.age}
            </p>
            <p style={{ margin: "2px", color: "blue" }}>
                gender:{data.gender}
            </p>
            <img src={data2.picture?.medium} style={{ width: "300px" }} alt="" />
            <p style={{ margin: "2px" }}>
                name: {data2.name?.first} {data2.name?.last}
            </p>
            <p style={{ margin: "2px" }}>
                age:{data2.dob?.age}
            </p>
            <p style={{ margin: "2px", color: "blue" }}>
                gender:{data2.gender}
            </p>
        </div>
    );
}

export default Uselayouteffectapi;