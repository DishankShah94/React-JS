import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate("/");
    }
    return (<>
        <button onClick={logout} className="btn-danger d-block mx-auto px-5 py-2 m-5">Logout</button>

    </>);
}

export default Logout;