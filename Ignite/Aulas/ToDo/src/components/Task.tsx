import styles from './Task.module.css'

import { v4 as uuidv4,V4Options } from 'uuid';
import { Trash,ThumbsUp, ChatTeardropDots } from 'phosphor-react';

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


    function handleMarkdownTask () {
        console.log('markdown');
    }

    return (
        <div className={styles.taskItemList} >
            <input type="checkbox" onClick={handleMarkdownTask} checked={isComplete} className={styles.taskItemCheck}/>
            <textarea readOnly className={styles.taskItemText}>{content}</textarea>
            <button onClick={handleDeleteTask} className={styles.taskItemDelete}>
                <Trash size={15}/>
            </button>
        </div>
    );
}