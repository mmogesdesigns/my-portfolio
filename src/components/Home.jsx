import React from 'react';
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate('projects');
  }
  return (
    <section className="home-section">
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            <img
              src="./logo-home.png"
              alt="Illustration"
              className="img-fluid "
            />
          </div>
          <div className="col-md-12 text-center">
            <h1>Mariamawit Moges</h1>
            <hr className="home-hr" />
            <h3 className="mt-1 upper">Front-end Developer</h3>
            <button onClick={handleClick} className="start-btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
