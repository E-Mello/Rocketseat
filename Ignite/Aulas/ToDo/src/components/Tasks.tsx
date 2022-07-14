import styles from './Tasks.module.css';

import clipboard from '../assets/Clipboard.svg'

export function Tasks() {
    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <input></input>
                <button></button>
            </div>
            <div className={styles.list}>
                <img src={clipboard}></img>
                <input type="text" name="" id="" />
            </div>
        </div>
    )
}