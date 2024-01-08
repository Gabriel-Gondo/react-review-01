import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Gabriel-Gondo.png"
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Gondo</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title="sete de janeiro as 20:34" dateTime="2024-01-07 20:34:00">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Paragrafo 1</p>
        <p>
          Paragrafo 2 <a href="#">link</a>
        </p>
        <p>Paragrafo 3</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

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
  );
}
