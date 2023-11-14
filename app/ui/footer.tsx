import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContentBox}>
        <div className={styles.footerTextConatiner}>
          <div>
            <h2>Multibagg</h2>
            <p className={styles.copyrightText}>
              @cppyright, All rights reserved.
            </p>
          </div>
          <div>
            <p className={styles.userActionText}>Login</p>
          </div>
          <div>
            <p className={styles.userActionText}>Signup</p>
          </div>
        </div>
        <div className={styles.socialIconContainer}>
          <div className={styles.iconContainer}>
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <IoLogoGithub className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
