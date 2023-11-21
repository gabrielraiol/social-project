import styles from "./Sidebar.module.scss";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Picture"
            />

            <div className={styles.profile}>
                <strong>Gabriel Raiol</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar seu Perfil</a>
            </footer>
        </aside>
    )
}