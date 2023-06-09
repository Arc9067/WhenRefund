import React from "react";
import {
  ArrowSwapHorizontal,
  EmptyWalletRemove,
  Ethereum,
  Moon,
} from "iconsax-react";

const Join = () => {
  return (
    <section className="py-[50px] w-full bg-white flex justify-center items-center">
      <div className="container flex justify-center w-full items-center gap-5 flex-col">
        <h1 className="title text-center text-5xl uppercase font-Baller">
          Join us!
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <a
            href="https://t.me/wen_refund"
            className="p-6 block w-full md:w-max text-center shadow-2xl capitalize text-4xl"
          >
            telegram
          </a>
          <a
            href="http://twitter.com/WENRFD"
            className="p-6 block w-full md:w-max text-center shadow-2xl capitalize text-4xl"
          >
            twitter
          </a>
          <a
            href="https://etherscan.io/token/0xfd93cbe06c06154820f0ee437f8ad0f60c976585"
            className="p-6 block w-full md:w-max text-center shadow-2xl capitalize text-4xl"
          >
            etherscan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Join;
