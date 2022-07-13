import { ThumbsUp, PlusCircle } from 'phosphor-react';  
import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div className={styles.newTask}>
            <input placeholder="Adicione uma nova tarefa"></input>
            <button type="submit">Criar <PlusCircle size={17} /></button>
        </div>
    )
}