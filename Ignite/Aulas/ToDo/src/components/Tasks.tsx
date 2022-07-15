import styles from './Tasks.module.css';

import clipboard from '../assets/Clipboard.svg'

export function Tasks() {
    return (
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
            <div className={styles.empty}>
                <img src={clipboard}></img>
                <h3>Voce ainda nao tem tarefas cadastradas</h3>
                <h4>Crie tarefas e organize seus itens a fazer</h4>
            </div>
        </div>
    )
}