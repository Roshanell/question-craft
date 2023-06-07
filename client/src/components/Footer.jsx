import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ borderRadius: '100px' }}
      >
        <span className="text-muted">
          Need More Help? Contact Us <Link to="/about">Here</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
