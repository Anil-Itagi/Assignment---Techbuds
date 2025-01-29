import React, { useEffect, useState } from "react";
import axios from "axios";
import UserListIterate from "./UserListIterate";


const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

 
  //styling for saparate user list
  
  const newStyle = { cursor: 'pointer', width: '60%', flex: 'display', justifyContent: 'center', marginLeft:'20%'}
  // Fetch all users
  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="">
      <h2 className="text-center">Users List</h2>

      
      {onSelectUser ? <UserListIterate users={users} onSelectUser={onSelectUser} /> : <UserListIterate users={users} newStyle={newStyle} /> }
        
    </div>
  );
};

export default UserList;
