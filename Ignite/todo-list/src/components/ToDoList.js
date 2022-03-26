import React, {useState} from 'react';
import CreateTaskPopup from '../modals/CreateTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => {
       setModal(!modal);  
    }
     const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        setModal(false)
        
    }
    return (
        <><div className="header text-center">
            <h3>To.Do List</h3>
            <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
        </div><div className="task-container">
                <ul>{taskList.map((obj) => <li key={obj.Name}>{obj.Name}</li>)}</ul>
            </div>
            <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />

        </>
    );

}

export default TodoList;