// src/components/User/User.js
import React, { useEffect } from 'react';
import { LiaUserCircleSolid } from "react-icons/lia";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';
import "./user.css";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // Redirect to the home page if the user is not authenticated
    if (!isAuthenticated) {
      navigate("/"); // Redirect to the homepage
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className='custom-profile-card mt-4 position-relative text-center'>
        <LiaUserCircleSolid size={100} className='m-auto' />
        <button className='btn btn-danger mt-3' onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default User;

