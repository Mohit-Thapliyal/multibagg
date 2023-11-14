import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt="Landing page"
            src="https://www.multibagg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.8511e5a5.jpg&w=3840&q=75"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
