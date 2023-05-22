import React from "react";
import {
  ArrowSwapHorizontal,
  EmptyWalletRemove,
  Ethereum,
  Moon,
} from "iconsax-react";

const Buy = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center gap-5 flex-col">
        <h1 className="title text-center text-5xl capitalize"> how to buy</h1>
        <div className="grid md:grid-cols-2 justify-between items-center gap-5">
          <div className="bg-black p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <EmptyWalletRemove size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl md:text-2xl text-white">
                CREATE A WALLET
              </h1>
              <p className="leading-relaxed text-white">
                TO Buy $WENRFD, you have Download your preferred wallet, either
                MetaMask or Trust wallet from the App stores, or from your
                chrome store on browser.
              </p>
            </div>
          </div>
          <div className="bg-black p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <Ethereum size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl md:text-2xl text-white">GRAB SOME ETH</h1>
              <p className="leading-relaxed text-white">
                You can purchase ETH on your wallet direct with your banking
                card, or you can buy on exchange and send to your wallet address
              </p>
            </div>
          </div>
          <div className="bg-black p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <ArrowSwapHorizontal size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl md:text-2xl text-white">GO TO UNISWAP</h1>
              <p className="leading-relaxed text-white">
                Go to the website: https://app.uniswap.org/#/swap from your
                mobile wallet broswer, or via google chrome on PC. Connect your
                wallet to the site and sign the wallet signature.
              </p>
            </div>
          </div>
          <div className="bg-black p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <Moon size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl md:text-2xl text-white">
                SWAP ETH FOR $WENRFD
              </h1>
              <p className="leading-relaxed text-white">
                Switch ETH to $WENRFD, we do not have taxes so be sure to adjust
                your slippage by pressing the cog wheel and dropping it to
                either 0 or 0.1%, to avoid MEV bots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
