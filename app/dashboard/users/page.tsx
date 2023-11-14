"use client";

import { useEffect, useState } from "react";
// import classes from "@/app/dashboard/users/allUsers.module.css";
import classes from "@/app/dashboard/users/allUsers.module.css";
import { UserType } from "@/app/utils/types";
import Image from "next/image";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  // const users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39PZmMFkK6rrYtI-9lvgfcggaiCPTAnORjA&usqp=CAU",
  //     bio: "Web Developer",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgGvJvUx7sg5j6IWlLHQ2AmCC3Ct3smEuwg&usqp=CAU",
  //     bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rerum aspernatur reiciendis eius, maxime consectetur dignissimos? Sint, doloribus quidem ea similique illo architecto sit rem ipsam ipsum distinctio iure molestiae.",
  //   },
  // ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);
  
  return (
    <div className={classes.users}>
      <h1>Users</h1>
      <div className={classes.user_list}>
        {users.map((user) => (
          <div key={user.id} className={classes.user_card}>
            <Image height={100} width={100} src={user?.profilePic} alt={user.name} />
            <div className={classes.user_info}>
              <h2>{user.name}</h2>
              <p>{user.bio.slice(0, 60)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Users;