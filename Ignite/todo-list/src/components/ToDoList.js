import React, {useState} from 'react';
import CreateTaskPopup from '../modals/createTask'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    //const toggle = () => {
    //    setModal(!modal);  
    //}

        constructor(props) {
          super(props);
          this.state = {
            modal: false
          };
      
          this.toggle = this.toggle.bind(this);
        }

    toggle() {
        this.setState({
          setModal: !this.state.modal
        });
      }

     saveTask = (taskObj) => {
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
                {taskList.map((obj) => <ul>
                    <li>{obj.name}</li>
                </ul>
                )}
            </div>
            <CreateTaskPopup toggle={this.toggle} modal={modal} save={saveTask} />

        </>
    );

}

export default TodoList;