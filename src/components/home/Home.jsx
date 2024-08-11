import React from "react";
import Style from "./Home.module.css";
import logotruck from "../../assets/logotruck.png";
import pizzaImg from "../../assets/pizzaImg.png";
import sideVector from "../../assets/sidevector.png";
const Home = () => {
  return (
    <div className={Style.mainContainer}>
      <div className={Style.containerLeft}>
        <div className={Style.leftInner}>
          <img src={logotruck} alt="logo" loading="eager" />
          <div className={Style.leftContainerFooter}>
            <h1>
              Discover the <span style={{ color: "red" }}>Best</span> Food and
              Drinks
            </h1>
            <p
             
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button>Explore Now!</button>
          </div>
        </div>
      </div>
      <div className={Style.containerRight}>
        <div className={Style.innerRight}>
          <img className={Style.pizzaImg} src={pizzaImg} alt="pizza" />
          <img className={Style.vectorImg} src={sideVector} alt="side" />
        </div>
        <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default Home;
