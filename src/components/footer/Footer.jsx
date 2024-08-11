import React from "react";
import Style from "./Footer.module.css";
import truck from "../../assets/logotruck.png";
import insta from "../../assets/insta.png";
import fb from "../../assets/fb.png";
import twt from "../../assets/twt.png";
const Footer = () => {
  return (
    <div className={Style.container}>
      <div className={Style.imgDiv}>
        <img src={truck} alt="" />
      </div>
      <div className={Style.contactDiv}>
        <h3>Contact Us</h3>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>
      <div className={Style.moreDiv}>
        <h3>More</h3>
        <ul>
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={Style.linkDiv}>
        <h3 >Social Links</h3>
        <div>
          <a href="*">
            <img src={insta} alt="" />
          </a>
          <a href="*">
            <img src={twt} alt="" />
          </a>
          <a href="*">
            <img src={fb} alt="" />
          </a>
        </div>
        <p>© 2022 Food Truck Example</p>
      </div>
    </div>
  );
};

export default Footer;
