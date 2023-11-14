import styles from "./signup.module.css";
import Image from "next/image";

export default function Signup() {
  return (
    <div className={styles.signupMain}>
      <div className={styles.signUpImageContainer}>
        <Image
          alt="Login image"
          src="https://www.multibagg.com/_next/static/media/signin-2.3c0d636c.svg"
          width={600}
          height={600}
        />
      </div>
      <div className={styles.signupConatiner}>
        <div className={styles.signupFormConatiner}>
          <div className={styles.imgaeAndformContainer}>
            <div className={styles.imageUploadContainer}>
              <div className={styles.imageContainerDashed}>
                <div className={styles.dashedContainer}></div>
              </div>
              <div className={styles.addProfilePicContainer}>
                <div className={styles.addPicBtn}>
                  <p>Add Profile Pic</p>
                </div>
              </div>
            </div>

            <form className={styles.signUpForm}></form>
          </div>
          <div className={styles.signUpBtnAndTextContainer}>
            <div className={styles.signUpBtnContainer}>
              <p>Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
