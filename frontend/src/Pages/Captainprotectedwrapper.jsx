import React, { useContext, useEffect } from 'react';
import { CaptainContext } from '../context/Captaincontext';
import { useNavigate } from 'react-router-dom';

const Captainprotectedwrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { captain, setCaptain } = useContext(CaptainContext);

  useEffect(() => {
    if (!token) {
      navigate('/captainlogin');
    }
  }, [navigate, token]);

  return <div>{children}</div>; // Render children properly
};

export default Captainprotectedwrapper;

