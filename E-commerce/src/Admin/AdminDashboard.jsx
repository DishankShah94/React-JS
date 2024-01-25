import { Outlet, useNavigate } from "react-router-dom";
import Admin from "./Admin";
import Slider from "./Slider";


const AdminDashboard = () => {

    return (
        <>
            <div className="container-fuild">
                <div className="row" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <div className="col-2" style={{ paddingRight: "0px" }}>
                        <Slider />
                    </div>
                    <div className="col-10" style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Admin />
                        <div className="container">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;