import { useEffect } from "react";
// import './portal.css'
const SetStorage = () => {
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify({ "username": "data" }));
    }, []);
    return (<>
        <h2 className="text-center">Local Storage</h2>
    </>);
}

export default SetStorage;