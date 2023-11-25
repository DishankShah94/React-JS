import React from "react";
import { Link, Outlet } from "react-router-dom";
const Functioncompomenu = () => {
    return (<>
        <ol>
            <li><Link to="functioncompointro">Functional Components Intro</Link> </li>
            <li><Link to="Usestateoddeven">Even odd using use State</Link> </li>
            <li><Link to="Usestaterandomnumber">Random Number using use state</Link> </li>
            <li><Link to="Usestatelistitem">Add List using use state</Link> </li>
            <li><Link to="UsestateApi">Api using use state</Link> </li>
            <li><Link to="UsestatePasswordshowhide">Password show hide using use state</Link> </li>
            <li><Link to="Useeffectex1">Use Effect EX 1</Link> </li>
            <li><Link to="Useeffectex2">Two counts using Use effect</Link> </li>
            <li><Link to="Useeffectex3">Validation using Use effect</Link> </li>
            <li><Link to="Useeffectex4">Live filtering using Use effect</Link> </li>
            <li><Link to="Useeffectex5">API using Use effect</Link> </li>
            <li><Link to="Uselayouteffectex1">Use Layout effect ex1</Link> </li>
            <li><Link to="Uselayouteffectanimation">Style using Use Layout effect</Link> </li>
            <li><Link to="Uselayouteffectapi">API using Use Layout effect</Link> </li>
            <li><Link to="Usememotodoex1">Todo and Count using Use Memo</Link> </li>
            <li><Link to="Usememoprimenoex2">Prime No using Use Memo</Link> </li>
            <li><Link to="Usememoaddtwono">Add two no directly on Input using Use Memo</Link> </li>
            <li><Link to="Usememoex4"> Use Memo Example 4</Link> </li>
            <li><Link to="Usecallbackex1">Add using Use Callback</Link> </li>
            <li><Link to="Usecallbacksortex2"> Sort using Use Callback</Link> </li>
            <li><Link to="Usecallbackex3"> Color theme using Use Callback</Link> </li>
            <li><Link to="Usecallbackapiex4"> Api Scrolling using Use Callback</Link> </li>
            <li><Link to="Usecallbackex5"> Todo using Use Callback</Link> </li>
            <li><Link to="UserProvider"> Use context ex 1</Link> </li>
            <li><Link to="Usecontextsalaryex2"> Salary using Use context ex 2</Link> </li>
            <li><Link to="Usecontextex3"> Use context ex 3</Link> </li>
            <li><Link to="Userefstopwatchex1"> Stop watch using Use ref</Link> </li>
            <li><Link to="Usereflikeex2"> Like product using Use ref</Link> </li>
            <li><Link to="Useimparativehandleex1">Use Imparative EX 1</Link> </li>
            <li><Link to="Useimparativehandleex2">Use Imparative EX 2</Link> </li>
        </ol>
        <div className="row">
            <div className="col">
                <Outlet></Outlet>
            </div>
        </div>
    </>);
}

export default Functioncompomenu;
