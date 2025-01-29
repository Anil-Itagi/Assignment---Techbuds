import React, { useEffect, useState } from "react";
import axios from "axios";

import './userListIterater.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const UserListIterate = ({ onSelectUser, newStyle }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/users`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/users/${id}`);
      alert("User deleted successfully!");
      fetchUsers(); // Refresh list without reloading
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Open Update Modal
  const openUpdateModal = (user) => {
    setSelectedUser(user);
    setNewName(user.name);
    setNewEmail(user.email);
    setNewMessage(user.message);
    setShowModal(true);
  };

  // Update user
  const handleUpdate = async () => {
    if (!newName || !newEmail || !newMessage) return alert("All fields are required!");

    try {
      await axios.put(`${baseUrl}/api/users/${selectedUser._id}`, {
        name: newName,
        email: newEmail,
        message: newMessage,
      });
      alert("User updated successfully!");
      setShowModal(false);
      fetchUsers(); // Refresh the list after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      {users.length !== 0 ? (
        <div>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user._id} className="user-item" style={{ cursor: "pointer", ...newStyle }}>
                <div onClick={() => onSelectUser?.(user._id)} className="user-info">
                  <input type="text" value={user.name} readOnly className="readonly-input" />
                  <input type="email" value={user.email} readOnly className="readonly-input" />
                  <input type="text" value={user.message} readOnly className="readonly-input" />
                </div>
                <div className="btn-group">
                  <button className="update-btn" onClick={() => openUpdateModal(user)}>
                    Update
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Custom Modal for Updating User */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h3>Update User</h3>
                <label>Name:</label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                <label>Message:</label>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />

                <div className="modal-actions">
                  <button onClick={() => setShowModal(false)}>Cancel</button>
                  <button onClick={handleUpdate}>Save</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <h4 >Empty user list, please create a new user</h4>
      )}
    </div>
  );
};

export default UserListIterate;
