import React from "react"
import styles from  "./styles/index.module.less"

export interface BookState {
  title: string;
  describe: string;
  icon: string;
  book: string;
}

const bookImgUrl: string = import.meta.env.VITE_BOOK_IMG_URL as string;
const bookBaseUrl: string = import.meta.env.VITE_BOOK_BASE_URL as string;

export default function Book(props: BookState) {
  const handleClick = () => window.open(bookBaseUrl + props.book)
  return (
    <div onClick={handleClick} className={styles.box}>
        <img className={styles.img} src={bookImgUrl + props.icon} alt={props.book} />
        <div>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.text}>{props.describe}</div>
        </div>
    </div>
  )
}
