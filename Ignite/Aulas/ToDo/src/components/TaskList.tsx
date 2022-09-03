import styles from './TaskList.module.css';

import clipboard from '../assets/Clipboard.svg'

import { v4 as uuid } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useState, InvalidEvent } from 'react';
import { FlagCheckered, PlusCircle, Trash } from 'phosphor-react';
import is from 'date-fns/esm/locale/is/index.js';
export interface TaskItem {
  //npm install uuidv4 (generate unid id)
  id: number;
  content: string;
  isComplete: boolean;
}

export function TaskList() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    let bdLocal = localStorage.getItem('tasks');

    if (bdLocal) {
      let obj = JSON.parse(bdLocal);
      setTasks(obj);
    }
  }, [])

  useEffect(() => {
    if (tasks.length > 0) {

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const task: TaskItem = {
      content: newTask,
      id: Math.random() * 1000,
      isComplete: false,
    }
    setTasks([...tasks, task]);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Please enter a task');
  }

  const isNewTaskEmpty = newTask.length === 0;

  function handleDeleteTask(id: number) {
    const receivedTasks = tasks.filter((task) => {
      return !(task.id === id);
    })
    setTasks(receivedTasks);
  }

  function handleMarkdownTask(id: number, isComplete: boolean) {
   const updateTasks = tasks.map((task) => {
      if (id === task.id) {
        return {
          ... task,
          isComplete,
        } as TaskItem
      } else {
        return task
      }
    })
    setTasks(updateTasks);
    console.log(tasks);
  }

  return (
    <main>
      <form onSubmit={handleNewTask}>
        <div className={styles.newTask}>
          <textarea
            name="content"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          >

          </textarea>
          <button type="submit" disabled={isNewTaskEmpty}>Criar <PlusCircle size={17} /></button>
        </div>
      </form>
      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            <p className={styles.pCreated}>Tarefas Criadas</p>
            <button className={styles.counter}>
              <p>{tasks.length}</p>
            </button>
          </div>
          <div className={styles.done}>
            <p className={styles.pCompleted}>Concluidas</p>
            <button className={styles.counter}>
              <p className={styles.pResult}>
              {tasks?.filter((task) => task.isComplete === true).length} de {tasks.length}
              </p>
            </button>
          </div>
        </div>

        {/* caso queira utilizar codigo, utilizar chave e caso não for, utilizar parenteses */}
        {
          tasks?.map(({ id, content, isComplete }) => (
            <div className={styles.taskItemList} key={id}>
              <input type="checkbox"
              defaultChecked={isComplete}
                onChange={() => {
                  handleMarkdownTask(id, !isComplete)
                }}

                className={styles.taskItemCheck}
              />

              <textarea readOnly value={content} className={styles.taskItemText} />
              <button onClick={() => { handleDeleteTask(id) }} className={styles.taskItemDelete}>
                <Trash size={15} />
              </button>
            </div>
          ),)

        }


      </div>
    </main>
  )
}