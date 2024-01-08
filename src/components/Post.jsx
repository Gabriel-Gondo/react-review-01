import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    </article>
  );
}
