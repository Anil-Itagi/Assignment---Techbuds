import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/api/users/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, [userId]);

  if (!user) {
    return (
      
      <div>
        <h2 className="text-center">Selected User</h2>

      <div className="card p-3">

        <h4 className="text-center">Select a user to see details</h4>
      </div>
        </div>
    );
  }

  return (
    <div>
         <h2 className="text-center">Selected User</h2>
    <div className="card p-3">

      <h3>Name :{user.name}</h3>
        <p>Email: {user.email}</p> <br />
        
         <p>Message: {user.message}</p>
      </div>
    </div>
  );
};

export default UserDetails;
