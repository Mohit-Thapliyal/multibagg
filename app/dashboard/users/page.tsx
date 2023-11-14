"use client";

import { useEffect, useState } from "react";
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
  //   }
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
            {/* <Image height={100} width={100} src={user?.profilePic} alt={user.name} /> */}
            {user ? 
              <img src={user.profilePic} alt={user.name} />
             : 
              <img
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-set-different-poses-white-background-illustration_632498-649.jpg?size=626&ext=jpg&ga=GA1.1.487515873.1699969608&semt=ais"
                alt="user"
              />
            }
            <div className={classes.user_info}>
              <h2>{user.name}</h2>
              <p>{user.bio.slice(0, 60)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
