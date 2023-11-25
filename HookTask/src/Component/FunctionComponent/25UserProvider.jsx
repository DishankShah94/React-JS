import { createContext, useState } from "react";
import Profile from "./Profile";

const UserContext = createContext('');
const UserDispatchContext = createContext('');

function UserProvider() {
    const [userDetails, setUserDetails] = useState({
        username: "Dishank Shah"
    });
    const [change, setChange] = useState({
        changeName: true,
    });
    const contextValue = {
        userDetails,
        setUserDetails,
        change,
        setChange,
    };
    return (
        <UserContext.Provider value={contextValue}>
              {/* <UserContext.Provider value={{ userDetails, change }}> */}
            <UserDispatchContext.Provider value={{setUserDetails,setChange}}>
                <Profile />
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}
export { UserProvider, UserContext, UserDispatchContext };