
import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h2>Welcome!</h2>
      <p>Please login or register.</p>
      <div className="button-container">
        <button className="home-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="home-button" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
