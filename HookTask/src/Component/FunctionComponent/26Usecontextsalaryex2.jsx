import { createContext, useContext, useState } from "react";

const employeeContext = createContext();
const Usecontextsalaryex2 = () => {
    const [employee, setEmployee] = useState({ Id: 101, Name: "Dishank", Location: "Gandhinagar", Salary: 20000 })
    return (<>
        <employeeContext.Provider value={employee}>
            <Employee />
        </employeeContext.Provider>
    </>);
}

export default Usecontextsalaryex2;
function Employee() {
    let context = useContext(employeeContext);
    return (<>
        <h2>Welcome to Employee component</h2>
        <p><label htmlFor="">Employee ID:<b>{context.Id}</b></label></p>
        <p><label htmlFor="">Employee Name:<b>{context.Name}</b></label></p>
        <Salary />
    </>);
}
function Salary() {
    let context = useContext(employeeContext);
    return (<>
        <h2>Welcome to Salary component</h2>
        <p><label htmlFor="">Employee ID:<b>{context.Id}</b></label></p>
        <p><label htmlFor="">Employee Salary:<b>{context.Salary}</b></label></p>
    </>)
}