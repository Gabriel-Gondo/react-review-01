import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="autor 1" content="conteudo 1" />
          <Post author="autor 2" content="conteudo 2" />
          <Post author="autor 3" content="conteudo 3" />
        </main>
      </div>
    </>
  );
}
