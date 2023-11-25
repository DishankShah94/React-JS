import React from "react";
import { Link, Outlet } from "react-router-dom";
const Example = () => {
    return (<>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Example</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2><Link to='functionalcomponent'>Function components</Link></h2>
                    {/* <ol>
                        <li><a href="">Introduction of Functional component</a></li>
                    </ol> */}
                </div>
                <div className="col">
                    <h2><Link to="classcomponent">Class components</Link></h2>
                    {/* <ol>
                        <li><a href="">Introduction of Class component</a></li>
                    </ol> */}
                </div>
            </div>
            <div className="col">
                <Outlet></Outlet>
            </div>
        </div>
    </>);
}

export default Example;