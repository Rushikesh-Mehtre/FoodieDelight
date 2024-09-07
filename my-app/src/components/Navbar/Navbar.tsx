// src/components/Navbar.tsx
import React from 'react';
import './Navbar.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/Slices/authSlice';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">
          <h3>FOODIEDELIGHT</h3>
        </div>
        <div className="navbar__actions">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
