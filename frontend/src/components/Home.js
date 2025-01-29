import React, { useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column - User Details */}
        <div className="col-md-3">
          <UserDetails userId={selectedUser} />
        </div>

        {/* Middle Column - User List */}
        <div className="col-md-6">
          <UserList onSelectUser={setSelectedUser} />
        </div>

        {/* Right Column - Extra Content */}
        <div className="col-md-3">
          <h3>Additional Content</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
