import React from "react";
import Logo from "../assets/image-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="py-[50px] w-full bg-black">
      <div className="container flex justify-center items-center">
        <h1 className="flex items-center gap-4 text-white text-4xl font-Baller">
          <img src={Logo} alt="" className="w-[5rem]" />
          $WENRFD
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
