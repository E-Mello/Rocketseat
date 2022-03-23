import {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const {taskName, setTaskName} = useState('');
    const {description, setDescription} = useState('');

   /* const handleChange = (e) => {
        const name = e.target.value;
        const value = e.target.value;        
                
        if(name === "taskName"){
            setTaskName(name)
        }else{
            setDescription(value)
        }

    }*/

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = {taskName}
        taskObj["Description"] = {description}
        //save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal Title</ModalHeader>  
            <ModalBody>
                <Form className="form">
                    <FormGroup>
                        <div className="form-group">
                            <Label>Task Name</Label>
                            <Input type="text" className="form-control" value={taskName} onInput={e => setTaskName(e.target.value)} name="taskName"></Input>
                        </div>
                        <div className="form-group">
                            <Label>Description</Label>
                            <textarea rows="5" className="form-control" value={description} onInput={e => setDescription(e.target.value)} name="description"></textarea>
                        </div>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary"  onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;