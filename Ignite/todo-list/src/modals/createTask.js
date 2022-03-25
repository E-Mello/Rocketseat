import {useState} from 'react';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const {taskName, setTaskName} = useState('');
    const {description, setDescription} = useState('');

    // const handleChange = (event) => {
    //     let value = event.target.value;
    //     let name = event.target.name;
      
    //     setTaskName((prevalue) => {
    //       return {
    //         ...prevalue,   // Spread Operator               
    //         [name]: value
    //       }
    //     })
    //     setDescription((prevalue) => {
    //         return {
    //             ...prevalue, // Spread Operator
    //             [name]: value
    //         }
    //     })
    //   }

    //    function handleChange(e) {
//     setTaskName(e.target.value);

//     }
    // const handleChange = (event) => {
        
    //     // const {name,value} = e.target.value;

    //     console.log(event.target.value);

    //     setTaskName(event.target.value);

    // }

    // let input = document.querySelector('input');
    // let log = document.getElementById('log');

    // input.oninput = handleInput;

    // function handleChange(e) {
    // log.textContent = `The field's value is
    //   ${e.target.value.length} character(s) long.`;
    // }

    const handleChange = (event) =>{ 
        // const {name, value} = e.target;

        this.setState({
            [event.target.setTaskName] : event.target.value
        })
        this.setState({
            [event.target.setDescription] : event.target.value
        })
    }


    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)   
    }

    return (
        //onChange={e => setTaskName(e.target.value)}
        <>
      <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal Title</ModalHeader>  
            <ModalBody>
                <form className="form">
                
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                        </div>
                    
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"  onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    );
};

export default CreateTaskPopup;