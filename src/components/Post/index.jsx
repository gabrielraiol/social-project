import { Comment } from "../Comment";
import styles from "./Post.module.scss";

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.author__avatar}
                        src="https://avatars.githubusercontent.com/u/39103851?v=4"
                        alt="Profile Picture"
                    />
                    <div className={styles.author__info}>
                        <strong>Gabriel Raiol</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="23 de Novembro de 2023 às 16h47min" dateTime="2023-11-21 16:47:04">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Faaala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">https://github.com/gabrielraiol</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Escreva um comentário..."/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>            
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}