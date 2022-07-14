import React from "react";
import Home from "./view/home";
import Footer from "./components/footer";
import styles from "./theme/app.module.less";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
