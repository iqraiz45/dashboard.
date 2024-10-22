import React from 'react';
import { FaBolt, FaTint, FaThermometerHalf } from 'react-icons/fa'; // Icons for Energy, Water, and Temp/Humidity
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <FaBolt className="icon" />
        Energy
      </div>
      <div className="navbar-item">
        <FaTint className="icon" />
        Water
      </div>
      <div className="navbar-item">
        <FaThermometerHalf className="icon" />
        Temp/Humidity
      </div>
    </div>
  );
};

export default Navbar;
