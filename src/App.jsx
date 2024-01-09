import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Gabriel-Gondo.png",
      name: "Gabriel Gondo",
      role: "FullStack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet",
      },
      {
        type: "paragraph",
        content:
          "consectetur adipiscing elit. Donec ullamcorper elit sed vehicula commodo. Quisque ornare ultricies mi eu varius. Sed mi libero, lacinia ac mauris consectetur, viverra hendrerit dui. Proin congue ullamcorper blandit. Nunc eget iaculis enim. Integer faucibus fermentum urna, vel tempus risus interdum ut. Nunc tempor euismod urna id viverra. Quisque ultricies vitae diam ut elementum. Praesent tortor est, fermentum sed ipsum et, faucibus blandit dui. Suspendisse nisl dui, auctor eget volutpat non, vehicula in risus. Aliquam erat sem, mollis vel venenatis volutpat, semper quis ante. Integer euismod, lorem faucibus malesuada mollis, mi velit eleifend tellus, et luctus ipsum leo nec magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed laoreet velit. Donec urna risus, porta eget est eu, tristique sodales lacus.",
      },
      {
        type: "link",
        content: "https://github.com/Gabriel-Gondo",
      },
    ],
    publishedAt: new Date("2024-01-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Gabriel-Gondo.png",
      name: "Gabriel Gondo",
      role: "FullStack Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "titulo 2",
      },
      {
        type: "paragraph",
        content:
          "consectetur adipiscing elit. Donec ullamcorper elit sed vehicula commodo. Quisque ornare ultricies mi eu varius. Sed mi libero, lacinia ac mauris consectetur, viverra hendrerit dui. Proin congue ullamcorper blandit. Nunc eget iaculis enim. Integer faucibus fermentum urna, vel tempus risus interdum ut. Nunc tempor euismod urna id viverra. Quisque ultricies vitae diam ut elementum. Praesent tortor est, fermentum sed ipsum et, faucibus blandit dui. Suspendisse nisl dui, auctor eget volutpat non, vehicula in risus. Aliquam erat sem, mollis vel venenatis volutpat, semper quis ante. Integer euismod, lorem faucibus malesuada mollis, mi velit eleifend tellus, et luctus ipsum leo nec magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed laoreet velit. Donec urna risus, porta eget est eu, tristique sodales lacus.",
      },
      {
        type: "link",
        content: "https://github.com/Gabriel-Gondo",
      },
    ],
    publishedAt: new Date("2024-01-02 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
