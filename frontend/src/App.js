import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar
import ServiceTest from "./components/ServiceTest";

import UserForm from "./components/UserForm";
import Home from "./components/Home";
import UserList from "./components/UserList";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar for navigation */}
      <Routes>
        <Route path="/createUser" element={<UserForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/serviceTest" element={<ServiceTest />} />
        <Route path="/users" element={<UserList/>} />
      </Routes>
       <Footer /> 
    </Router>
  );
}

export default App;
