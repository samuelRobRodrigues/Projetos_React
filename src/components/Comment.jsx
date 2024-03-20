import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"


export function Comment({ content, onDeleteComment }) {
    
    const [likeCount, setLikeCount] = useState(0); 



    function handleDeleteComment(){
        console.log('Deletar')

        onDeleteComment(content)
    }

    function likeComment() {
        setLikeCount((state) => {
            return state + 1 
        });
    } 



    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/samuelrobrodrigues.png" />
        
            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Roberto</strong>
                            <time title="01 de Março às 23:05h" dateTime="2024-03-01 23:04:36">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={likeComment}>
                        <ThumbsUp />
                        Curtir
                        <span>{likeCount }</span>
                    </button>
                </footer>

            </div>
        


        </div>
    )
}