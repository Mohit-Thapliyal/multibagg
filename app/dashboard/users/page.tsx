// pages/profile.js
// import { useEffect, useState } from "react";

const Users = () => {
  // const [users, setUsers] = useState([]);

  const users = [
    { id: 1, name: "John Doe", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39PZmMFkK6rrYtI-9lvgfcggaiCPTAnORjA&usqp=CAU", bio: "Web Developer" },
    { id: 2, name: "Jane Smith", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKgGvJvUx7sg5j6IWlLHQ2AmCC3Ct3smEuwg&usqp=CAU", bio: "Designer" },
    
  ];

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("/api/profile");
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default Users;
