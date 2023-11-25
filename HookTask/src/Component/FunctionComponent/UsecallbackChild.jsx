import { memo } from "react";

const UsecallbackChild = ({ tasks, addTask }) => {
    console.log("child rendered");
    return (<>
        <div>
            <h2>Task list</h2>
            {tasks.map((task, i) => (<p key={i}>{task}
            </p>))}
            <button onClick={addTask}>Add Task</button>
        </div>
    </>);
}

export default memo(UsecallbackChild);