import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.scss";

export function App() {

  return(
    <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
                author="Gabriel Raiol"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia delectus quasi fuga, vitae consectetur nobis, magni voluptates praesentium saepe id minima sequi sapiente accusamus? Alias cum ad illo ab vero!"
            />

            <Post/>
          </main>
        </div>
    </div>
  )

}