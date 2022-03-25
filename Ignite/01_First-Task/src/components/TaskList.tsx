import { useEffect, useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare, FiCheckCircle, FiSave } from 'react-icons/fi'
import { Task } from './Interface';

import {ToastContainer, toast} from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import styled, { createGlobalStyle } from 'styled-components';


export function TaskList() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);  

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.

    if (newTaskTitle == ""){
      toast.warning("Digite alguma task")
    } else {

      const idRandom = (num: number) =>  Math.floor(Math.random() * num);

      const newTask = {id: idRandom(1000), title: newTaskTitle, isComplete: false}
      
      setTasks([...tasks, newTask])
  
      // Caso o campo title não estiver preenchido aparecer um warning
  
  
      // Caso consiga adicionar uma nova task aparecer um success
      toast.success("Task Cadastrada com sucesso!");
      // Reset Input Field
      setNewTaskTitle("")
      
    }


    }

  function handleRemoveTask(DeleteTaskByID: number) {
    // Remova uma task da listagem pelo ID
    setTasks(tasks.filter((taskID) => taskID.id !== DeleteTaskByID))
  }

  const handleToggleTaskCompletion = (id: number) => {
    
    
    let newTasks = tasks.map((task) => {
      if(task.id === id){
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    console.log(newTasks);

    setTasks(newTasks);

    //console.log(newTask);
    
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
      // const input = $('inputName')[0];
  
      // if ((input as HTMLInputElement).checked) {
      //     setTasks.isComplete: true;
      //     return setTasks.isComplete: true;
      // } 
      // else if (!(input as HTMLInputElement).checked) {
      //   setTasks.isComplete: false;
      //   return setTasks.isComplete: false;
      // }

      // const [isChecked, setIsChecked] = useState(false);
      // const [tasks, setTasks] = useState<Task[]>([]);  

      // const handleOnChange = () => {
      //   setIsChecked(!isChecked);

      // useEffect(() => {
      //   if(tasks.isChecked)
      // })
      // }
      
      //tenho que mudar o valor de isComplete para true quando marcar o checkbox

      // where isComplete = true div className receive 'completed'

      // const editItem = (isComplete: boolean) => {
      //    setTasks.isComplete({
      //     isComplete: true
      //   })
      // }

  }
  return (
    <section className="task-list container">

      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            id="taskTitle"
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiSave size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {/* {tasks.map(task => (
            <div>
              {task.id}
              {task.title}
            </div>
          ))} */}

          {tasks.map((task) => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    id="inputName"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{'ID:' + task.id }</p>&nbsp;<p>{' Task:  ' + task.title}</p>
              </div>
              <div>
              <br></br><br></br>
              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={20}/>
              </button>
              </div>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}

