import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const [cookies, setCookies, removeCookies] = useCookies(['loggedin']);
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/");

    }, [])
    const logout = async () => {
        await removeCookies('loggedin');
        await removeCookies('admin');
        return true;
    }
    return (<>
        {/* <button onClick={logout} className="btn-danger d-block mx-auto px-5 py-2 m-5">Logout</button> */}

    </>);
}

export default Logout;