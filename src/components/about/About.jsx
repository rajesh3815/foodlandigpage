import React from "react";
import Style from "./About.module.css";
import aboutImg from '../../assets/girl (lp).png'
const About = () => {
  return (
    <div className={Style.mainContainer}>
     
      <div className={Style.imgDiv}>
        <img src={aboutImg} alt="about Image" />
      </div>
      <div className={Style.aboutDiv}>
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default About;
