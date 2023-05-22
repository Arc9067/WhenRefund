import React from "react";
import Logo from "../assets/image-removebg-preview.png";

const Hero = () => {
  return (
    <section className="py-[100px] bg-black w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col gap-6 justify-center items-center text-center text-white">
        <img src={Logo} alt="" />
        <h1 className="capitalize text-5xl text-green">
          Wen Refund “No Refund for the Jeets”
        </h1>
        <p className="max-w-3xl">
          In the wild world of meme coins, Jeets gained immense popularity. But
          when investors sought refunds, they were met with a cold reality: "No
          Refund for the Jeets." Chaos ensued, leaving wallets empty and dreams
          shattered.
        </p>
        <h1 className="font-bold capitalize text-2xl">contract</h1>
        <p className="p-3 border-2 text-xs md:text-xl">
          0xd1e0ecef5b871f81dfdbe4c9ca769e99d8c49779
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href=""
            className="bg-green px-8 rounded-lg capitalize text-black font-bold hover:animate-bounce transition py-4"
          >
            buy on uniswap
          </a>
          <a
            href=""
            className="border-2 px-10  capitalize text-white rounded-full font-bold hover:animate-bounce transition py-4"
          >
            join our telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
