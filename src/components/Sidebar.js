import React, { useState } from 'react';
import { FaTachometerAlt, FaChartBar, FaBell, FaFileAlt, FaClipboardList, FaChartPie, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Ensure you have your CSS file for Sidebar
import logo from '../assets/logo.png'; // Adjust the path if necessary



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);   

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo">
        {/* Conditionally render the logo based on isOpen */}
        {isOpen && <img src={logo} alt="Logo" className="logo-image" />} {/* Replace with the correct path to your logo */}
      </div>
      <div className="toggle-icon" onClick={toggleSidebar}>
        {isOpen ? '✖' : '☰'} {/* Cross and hamburger icon */}
      </div>
      <div className="sidebar-headings">
        <div className="heading">
          <FaTachometerAlt className="icon" /> {isOpen && 'Dashboard'}
        </div>
        <div className="heading">
          <FaChartBar className="icon" /> {isOpen && 'Analysis'}
        </div>
        <div className="heading">
          <FaBell className="icon" /> {isOpen && 'Alarm Setup'}
        </div>
        <div className="heading">
          <FaFileAlt className="icon" /> {isOpen && 'Report Generation'}
        </div>
        <div className="heading">
          <FaClipboardList className="icon" /> {isOpen && 'M&V'}
        </div>
        <div className="heading">
          <FaChartPie className="icon" /> {isOpen && 'KPI'}
        </div>
        <div className="heading">
          <FaHeadset className="icon" /> {isOpen && 'Support'}
        </div>
        <div className="heading">
          <FaSignOutAlt className="icon" /> {isOpen && 'Sign Out'}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
