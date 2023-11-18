import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";

export function App() {

  return(
    <div>
        <Header/>

        <Post
            author="Gabriel Raiol"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia delectus quasi fuga, vitae consectetur nobis, magni voluptates praesentium saepe id minima sequi sapiente accusamus? Alias cum ad illo ab vero!"
        />
    </div>
  )

}