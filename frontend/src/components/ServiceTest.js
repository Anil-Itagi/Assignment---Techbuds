import React, { useState } from 'react';

const ServiceTest = () => {
  // Controller function
  const [text, setText] = useState("");
  const handleButtonClick = () => {
      console.log(text);
      alert("Check your console");
  };

  // Inline styles
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    color: 'green',
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: 'darkgreen',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Print Anything in Console Example</h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button
        onClick={handleButtonClick}
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = 'darkgreen')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'green')}
      >
        Print
      </button>
    </div>
  );
};

export default ServiceTest;
