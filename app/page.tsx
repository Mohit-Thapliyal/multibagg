import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.mainContainer}>Landing page!</div>
      <Footer />
    </div>
  );
}
