import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <input
        type="checkbox"
        id="check"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Techbuds</label>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/users" onClick={() => setMenuOpen(false)}>Users</Link>
        </li>
        <li>
          <Link to="/createUser" onClick={() => setMenuOpen(false)}>Create User</Link>
        </li>
        <li>
          <Link to="/serviceTest" onClick={() => setMenuOpen(false)}>Service Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
