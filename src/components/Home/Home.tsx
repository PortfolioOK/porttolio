import React from "react";
import "./Home.scss";
import Photo from "../../assets/photo.png";

const Home: React.FC = () => {
  return (
    <div className="home">
        <p className="aro"></p>
      <div className="container-home">
        <h2>Hola a todos, soy</h2>
        <h1>Adriana Paredes S</h1>
        <p>Desarrolladora de Software</p>
        <button>Contáctame</button>
      </div>
      <div className="container-photo">
        <img src={Photo} alt="" />
        <p className="circle"></p>
        <p className="rectangle"></p>
      </div>
    </div>
  );
};

export default Home;
