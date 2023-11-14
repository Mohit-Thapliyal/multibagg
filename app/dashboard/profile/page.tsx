'use client';

import classes from "@/app/dashboard/profile/profile.module.css";
import { useEffect, useState } from "react";

const Profile = () => {
  // const [userData, setUserData] = useState<UserType | null>(null);

  // const [userData, setUserData] = useState<UserType | null>(null);


  const userData = {
    name: "John Doe",
    profilePic:
      "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis quidem voluptates officia. Porro ratione soluta dolore inventore corrupti laborum iste quaerat possimus, vero magni sapiente ut unde asperiores? Aspernatur.",
  };

  // useEffect(() => {
  //   // };
  //   const fetchUserData = async () => {
  //     try {
  //       const email = "mohit100@gmail.com"; // Set the desired email
  //       const response = await fetch("/api/profile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email }),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };


  //   fetchUserData();
  // }, []);

  return (
    <div className={classes.profile}>
      {/* <div className={classes.profilelist}> */}
        {userData ? (
          <div>
            <img src={userData.profilePic} alt="Profile" />
            <h1>{userData.name}</h1>
            <p>{userData.bio}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    // </div>
  );
};

export default Profile;
