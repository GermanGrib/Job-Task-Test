import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <img className={styles.image} src="/chat.svg" alt="chat icon" />
      <h1 className={styles.title}>Great Project</h1>
    </header>
  );
};

export default Header;
