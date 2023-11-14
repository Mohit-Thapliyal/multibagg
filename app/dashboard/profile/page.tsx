// pages/profile.js
import { useEffect, useState } from "react";
import classes from "@/app/dashboard/profile/profile.module.css";



const Profile = () => {
  // const [userData, setUserData] = useState(null);

  const userData = {
    name: "John Doe",
    image: "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In omnis quidem voluptates officia. Porro ratione soluta dolore inventore corrupti laborum iste quaerat possimus, vero magni sapiente ut unde asperiores? Aspernatur."
  };

  // useEffect(() => {
  //   // Fetch user data from the API route
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("/api/profile");
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
      {userData ? (
        <div>
          <img src={userData.image} alt="Profile" />
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
