import styles from "./login.module.css";
import Image from "next/image";
export default function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginFormConatiner}>
        <form className={styles.formConatiner}>
          <div className={styles.formContainer1}>
            <p>Welcome back</p>
          </div>
          <div className={styles.formContainer2}>
            <div className={styles.userIdContainer}>
              <p className={styles.inputLabel}>User Id</p>
              <input className={styles.input} />
            </div>
            <div className={styles.userPasswordContainer}>
              <p className={styles.inputLabel}>Password</p>
              <input className={styles.input} />
            </div>
          </div>
          <div className={styles.formContainer3}>
            <div className={styles.loginBtnConatiner}>
              <p className={styles.loginText}>Login</p>
            </div>
            <p>
              Dont't have an account?{" "}
              <span className={styles.signUpText}>Sign up</span> for free
            </p>
          </div>
        </form>
      </div>
      <div className={styles.loginImageConatiner}>
        <Image
          alt="Login image"
          src="https://www.multibagg.com/_next/static/media/signin-2.3c0d636c.svg"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
