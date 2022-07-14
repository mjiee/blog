import React from "react";
import styles from "./styles/index.module.less";

export default function Footer() {
  const handleClick = () => window.open("https://beian.miit.gov.cn/");

  return (
    <div className={styles.footer}>
      &copy; 2022-2032 mjiee.top 版权所有 ICP证: &nbsp;
      <span onClick={handleClick}>浙ICP备2022007978号</span>
    </div>
  );
}
