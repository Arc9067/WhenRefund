import React from "react";
import Logo from "../assets/image-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="py[50px] w-full bg-black">
      <div className="container flex justify-center items-center">
        <img src={Logo} alt="" className="w-[10rem]" />
      </div>
    </footer>
  );
};

export default Footer;
