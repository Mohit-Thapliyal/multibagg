import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <p className={styles.logo}>Multibagg</p>
      </div>
      <div className={styles.loginContainer}>
        <p className={styles.loginText}>login</p>
      </div>
    </div>
  );
}
