import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/samuelrobrodrigues.png" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Roberto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="01 de Março às 23:05h" dateTime="2024-03-01 23:04:36">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="https://github.com/samuelRobRodrigues/Projeto-Bernadelli">Projeto-Bernadelli</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
} 