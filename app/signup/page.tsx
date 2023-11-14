"use client";

import { useState } from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const createUserHandler = async () => {
    try {
      const res = await fetch("api/auth/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          profilePic:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8",
          email: email,
          password: password,
          bio: bio,
          date: new Date().getTime(),
        }),
      });
      const data = await res.json();
      console.log(data);
      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

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

            <form className={styles.signUpForm}>
              <div className={styles.formElement}>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={styles.formElement}>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.formElement}>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className={styles.formElement}>
                <label htmlFor="">Bio</label>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={5}
                  placeholder="Enter your bio"
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div
            onClick={createUserHandler}
            className={styles.signUpBtnAndTextContainer}
          >
            <div className={styles.signUpBtnContainer}>
              <p>Sign up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
