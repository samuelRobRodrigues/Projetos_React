import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/samuelrobrodrigues.png" />

                <strong>Samuel Roberto</strong>
                <span>Web Developer</span>
            </div>
        
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>


    )
}