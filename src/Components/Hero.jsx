import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-[100px] bg-black w-full min-h-screen flex justify-center items-center">
      <div className="container flex flex-col gap-6 justify-center items-center text-center text-white">
        <img src={Logo} alt="" className="w-[14rem]" />
        <h1 className="capitalize text-5xl text-green font-Baller">
          Wen Refund “No Refund for the Jeets”
        </h1>
        <p className="max-w-3xl font-Baller">
          <span className="font-bold text-xl">
            In the wild world of meme coins
          </span>
          , Jeets gained immense popularity. But when investors sought refunds,
          they were met with a cold reality: "No Refund for the Jeets." Chaos
          ensued, leaving wallets empty and dreams shattered.
        </p>
        <h1 className="font-bold capitalize text-2xl font-Baller">contract</h1>
        <p className="p-3 border-2 text-xs md:text-xl">
          0xfd93cbe06C06154820f0EE437F8aD0F60C976585
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href=""
            className="bg-green px-8 rounded-lg capitalize text-black font-bold hover:animate-bounce transition py-4"
          >
            buy on uniswap
          </a>
          <a
            href="https://t.me/wen_refund"
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
