import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return (
        <div className={styles.comment}>
        
        <Avatar hasBorder={false} src="https://github.com/e-mello.png"/>
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>

            <header>
                <div className={styles.authorAndTime}>
                    <strong>Edio Mello</strong>
                    <time 
                        title="11 de maio as 08:13" 
                        dateTime="2022-05-11 08:13:30">
                        Cerca de 1h atras
                    </time>
                </div>

                <button title="Deletar comentario">
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span> 
                </button>
            </footer>
        </div>

    </div>
    )
}