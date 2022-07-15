import { BookState } from "./book";

export const content: Array<BookState> = [
  {
    book: "linux",
    title: "Linux学习笔记",
    describe:
      "本书主要记录我在运维工作中的一些学习笔记，除linux系统相关知识外，还包含数据库、容器、web服务等内容。",
    icon: "/blog/home/linux.webp",
  },
  {
    book: "frontend",
    title: "前端学习笔记",
    describe:
      "本书为个人前端学习笔记，主要包含: HTML, CSS, JS, TS, React, Flutter等技术栈。",
    icon: "/blog/home/frontend.webp",
  },
  {
    book: "go",
    title: "Go学习笔记",
    describe: "本书为个人go语言学习笔记, 包含基础语法和常见库的学习记录。",
    icon: "/blog/home/go.webp",
  },
  {
    book: "rust",
    title: "Rust学习笔记",
    describe: "本书为个人rust语言学习笔记，主要包含rust基础语法部分。",
    icon: "/blog/home/rust.webp",
  },
];
