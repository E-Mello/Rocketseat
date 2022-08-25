import styles from './Task.module.css'

import { v4 as uuidv4,V4Options } from 'uuid';
import { Trash,ThumbsUp } from 'phosphor-react';

interface TaskItem {
    //npm install uuidv4 (generate unid id)  
    id: number ;
    content: string;
    isComplete: boolean;
}

//const myuuid = uuidv4();

export function Task({content,id,isComplete}: TaskItem) {

    function handleDeleteTask() {
        console.log('delete');
    }


    

    return (
        <div className={styles.taskItemList} >
            <input type="checkbox"  className={styles.checkItem}/>
            <textarea name="" id=""></textarea>
            <button onClick={handleDeleteTask} className={styles.deleteItem}>
                <Trash size={24}/>
            </button>
        </div>
    );
}