import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4" style={{marginTop:"230px"}}>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We provide high-quality services to help you achieve your goals.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: hr@tekbuds.com</p>
            <p>Phone: +9353421628</p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Tekbuds. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
