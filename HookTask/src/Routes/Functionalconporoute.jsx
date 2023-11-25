import React from "react";
import { useRoutes } from "react-router-dom";
import Functioncompomenu from "./../Component/FunctionComponent/01Functioncompomenu.jsx";
import Functioncompointro from "./../Component/FunctionComponent/02Functioncompointro.jsx";
import Usestateoddeven from "../Component/FunctionComponent/03Usestateoddeven.jsx";
import Usestaterandomnumber from "../Component/FunctionComponent/04Usestaterandomnumber.jsx";
import UsestateListItem from "../Component/FunctionComponent/05UsestateListItem.jsx";
import UsestateApi from "../Component/FunctionComponent/06UsestateApi.jsx";
import UsestatePasswordshowhide from "../Component/FunctionComponent/07UsestatePasswordshowhide.jsx";
import Useeffectex1 from "../Component/FunctionComponent/08Useeffectex1.jsx";
import Useeffectex2 from "../Component/FunctionComponent/09Useeffectex2.jsx";
import Useeffectex3 from "../Component/FunctionComponent/10Useeffectex3.jsx";
import Useeffectex4 from "../Component/FunctionComponent/11Useeffectex4.jsx";
import Useeffectex5 from "../Component/FunctionComponent/12Useeffectex5.jsx";
import Uselayouteffectex1 from "../Component/FunctionComponent/13Uselayouteffectex1.jsx";
import Uselayouteffectanimation from "../Component/FunctionComponent/14Uselayouteffectanimation.jsx";
import Uselayouteffectapi from "../Component/FunctionComponent/15Uselayouteffectapi.jsx";
import Usememotodoex1 from "../Component/FunctionComponent/16Usememotodoex1.jsx";
import Usememoprimenoex2 from "../Component/FunctionComponent/17Usememoprimenoex2.jsx";
import Usememoaddtwono from "../Component/FunctionComponent/18Usememoaddtwono.jsx";
import Usememoex4 from "../Component/FunctionComponent/19Usememoex4.jsx";
import Usecallbackex1 from "../Component/FunctionComponent/20Usecallbackex1.jsx";
import Usecallbacksortex2 from "../Component/FunctionComponent/21Usecallbacksortex2.jsx";
import Usecallbackex3 from "../Component/FunctionComponent/22Usecallbackex3.jsx";
import Usecallbackapiex4 from "../Component/FunctionComponent/23Usecallbackapiex4.jsx";
import Usecallbackex5 from "../Component/FunctionComponent/24Usecallbackex5.jsx";
import { UserProvider } from "../Component/FunctionComponent/25UserProvider.jsx";
import Usecontextsalaryex2 from "../Component/FunctionComponent/26Usecontextsalaryex2.jsx";
import Usecontextex3 from "../Component/FunctionComponent/27Usecontextex3.jsx";
import Userefstopwatchex1 from "../Component/FunctionComponent/28Userefstopwatchex1.jsx";
import Usereflikeex2 from "../Component/FunctionComponent/29Usereflikeex2.jsx";
import Useimparativehandleex1 from "../Component/FunctionComponent/30Useimparativehandleex1.jsx";
import Useimparativehandleex2 from "../Component/FunctionComponent/31Useimparativehandleex2.jsx";




const Functionalconporoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Functioncompomenu />,
            children: [
                {
                    path: "functioncompointro",
                    element: <Functioncompointro />
                },
                {
                    path: "Usestateoddeven",
                    element: <Usestateoddeven />
                },
                {
                    path: "Usestaterandomnumber",
                    element: <Usestaterandomnumber />
                },
                {
                    path: "Usestatelistitem",
                    element: <UsestateListItem />
                },
                {
                    path: "UsestateApi",
                    element: <UsestateApi />
                },
                {
                    path: "UsestatePasswordshowhide",
                    element: <UsestatePasswordshowhide />
                },
                {
                    path: "Useeffectex1",
                    element: <Useeffectex1 />
                },
                {
                    path: "Useeffectex2",
                    element: <Useeffectex2 />
                },
                {
                    path: "Useeffectex3",
                    element: <Useeffectex3 />
                },
                {
                    path: "Useeffectex4",
                    element: <Useeffectex4 />
                },
                {
                    path: "Useeffectex5",
                    element: <Useeffectex5 />
                },
                {
                    path: "Uselayouteffectex1",
                    element: <Uselayouteffectex1 />
                },
                {
                    path: "Uselayouteffectanimation",
                    element: <Uselayouteffectanimation />
                },
                {
                    path: "Uselayouteffectapi",
                    element: <Uselayouteffectapi />
                },
                {
                    path: "Usememotodoex1",
                    element: <Usememotodoex1 />
                },
                {
                    path: "Usememoprimenoex2",
                    element: <Usememoprimenoex2 />
                },
                {
                    path: "Usememoaddtwono",
                    element: <Usememoaddtwono />
                },
                {
                    path: "Usememoex4",
                    element: <Usememoex4 />
                },
                {
                    path: "Usecallbackex1",
                    element: <Usecallbackex1 />
                },
                {
                    path: "Usecallbacksortex2",
                    element: <Usecallbacksortex2 />
                },
                {
                    path: "Usecallbackex3",
                    element: <Usecallbackex3 />
                },
                {
                    path: "Usecallbackapiex4",
                    element: <Usecallbackapiex4 />
                },
                {
                    path: "Usecallbackex5",
                    element: <Usecallbackex5 />
                },
                {
                    path: "UserProvider",
                    element: <UserProvider />
                },
                {
                    path: "Usecontextsalaryex2",
                    element: <Usecontextsalaryex2 />
                },
                {
                    path: "Usecontextex3",
                    element: <Usecontextex3 />
                },
                {
                    path:"Userefstopwatchex1",
                    element:<Userefstopwatchex1/>
                },
                {
                    path:"Usereflikeex2",
                    element:<Usereflikeex2/>
                },
                {
                    path:"Useimparativehandleex1",
                    element:<Useimparativehandleex1/>
                },
                {
                    path:"Useimparativehandleex2",
                    element:<Useimparativehandleex2/>
                }
            ]
        }
    ])
    return routes;
}

export default Functionalconporoute;
