import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/user/logout', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);

        if (response.status === 201) {
          localStorage.removeItem('token');
          navigate("/login");
        } else {
          console.error("Failed to log out");
        }
      } catch (err) {
        console.error("Error while logging out", err);
        navigate("/login");
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default UserLogout;


