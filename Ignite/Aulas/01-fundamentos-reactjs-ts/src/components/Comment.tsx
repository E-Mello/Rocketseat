import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    oneDeleteComment: (comment: string) => void;
}

export function Comment({content, oneDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        oneDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1;
        }); 
        
        
        setLikeCount(likeCount + 1);
    }

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

                <button onClick={handleDeleteComment} title="Deletar comentario">
                    <Trash size={24}/>
                </button>
            </header>
            <p>{content}</p>
            </div>

            <footer>
                {/* () => setLikeCount(likeCount + 1) */}
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span> 
                </button>
            </footer>
        </div>

    </div>
    )
}