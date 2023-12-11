import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.scss';

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/39103851?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div>
                            <strong>Gabriel Raiol</strong>
                            <time title="23 de Novembro de 2023 às 16h47min" dateTime="2023-11-21 16:47:04">Cerca de 1h atrás</time>                            
                        </div>

                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}