import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"

export function Comment() {
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
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>Muito bom Samuel, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir
                        <span>20</span>
                    </button>
                </footer>

            </div>
        


        </div>
    )
}