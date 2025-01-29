// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './userForm.css'; // Importing the CSS file

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [message1, setMessage1] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      email,
      message,
    };

    try {
      // Send POST request to Node.js backend
      await axios.post('http://localhost:5000/api/users', userData);
      setMessage1('User data submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      setMessage('Failed to submit user data.' + error);
    }
  };

  return (
   

   <div className='form1'>
    <div className="user-form">
      <h3>Submit User Details</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </div>
          <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message1 && <p className={message1.includes("success") ? 'success' : 'error'}>{message1}</p>}
      </div>
      </div>
  );
};

export default UserForm;
