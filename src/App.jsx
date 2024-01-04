import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <Post author="autor 1" content="conteudo 1" />
      <Post author="autor 2" content="conteudo 2" />
      <Post author="autor 3" content="conteudo 3" />
    </>
  );
}
