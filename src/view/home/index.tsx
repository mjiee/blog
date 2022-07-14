import React from "react";
import Book from "./book";
import { content } from "./content";
import styles from "./styles/index.module.less";

export default function Home() {
  return (
    <div className={styles.home}>
      {content.map((value) => {
        return (
          <Book
            key={value.book}
            book={value.book}
            title={value.title}
            describe={value.describe}
            icon={value.icon}
          />
        );
      })}
    </div>
  );
}
