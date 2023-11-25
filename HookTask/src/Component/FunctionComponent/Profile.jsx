import { useContext } from "react";
import { UserContext, UserDispatchContext } from "./25UserProvider";

function Profile() {
    const userDetailsContext = useContext(UserContext);
    const dispatchContext = useContext(UserDispatchContext);
    const changeName = () => {
        console.log("change Name");
        if (userDetailsContext.change.changeName === true) {
            dispatchContext.setUserDetails({ username: 'Dishank Shah' });
            dispatchContext.setChange({ ...userDetailsContext.change, changeName: false });
        } else {
            dispatchContext.setUserDetails({ username: 'Dishu Shah' });
            dispatchContext.setChange({ ...userDetailsContext.change, changeName: true });
        }
    }
    return (<>
        <button onClick={changeName}> Change Name</button>
        <p>{userDetailsContext.userDetails.username}</p>
    </>);
}


export default Profile;