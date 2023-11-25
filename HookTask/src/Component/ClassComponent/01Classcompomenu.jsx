import { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
    state = {}
    render() {
        return (<>
            <div className="row">
                <div className="col-6 offset-6">
                    <ol>
                        <li><Link to="classcompointro">Class Components Intro</Link></li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                </div>
            </div>
        </>);

    }
}

export default Classcompomenu;