import styles from './TaskList.module.css';

import clipboard from '../assets/Clipboard.svg'

import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useState, InvalidEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import { Task } from './Task';

export function TaskList() {

    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([
        'Write here'
    ])
    const [cont, setCont] = useState(0);


    function handleNewTask(event: FormEvent){        
        event.preventDefault();

        setTasks([...tasks, newTask]);    
        setNewTask('');

        setCont((state) => {
            return state + 1;
        });

        setCont(cont + 1);
   }

   function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
   }

   function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Please enter a task');
   }

    return (
        <div>
        <form onSubmit={handleNewTask}>
            <div className={styles.newTask}>
                <input
                    // placeholder={tasks} 
                    placeholder="Adicione uma nova tarefa" 
                    // id={TaskItem.id}
                    //onChange={handleNewTaskChange}
                    //onInvalid={handleNewTaskInvalid}
                    required
                    >

                </input>
                <button type="submit">Criar <PlusCircle size={17} /></button>
            </div>
        </form>
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.created}>
                    <p>Tarefas Criadas</p>
                    <button className={styles.counter}>
                        <p>0</p>
                    </button>
                </div>
                <div className={styles.done}>
                    <p>Concluidas</p>
                    <button className={styles.counter}>
                        <p>0</p>
                    </button>
                </div>
            </div>
            
                <div className={styles.empty} >
                    <img src={clipboard}></img>
                    <h3>Voce ainda nao tem tarefas cadastradas</h3>
                    <h4>Crie tarefas e organize seus itens a fazer</h4>
                </div>
                {/* <div className={styles.notEmpty} hidden>
                {tasks.map(task => {
                    return (
                        <Task 
                            key={uuid()}
                            id={''}
                            content={''}
                            isComplete={false}
                        />   
                    )
                })}
                </div>                   */}
        </div>
        </div>
    )
}