import React from "react";
import { EmptyWalletRemove } from "iconsax-react";

const Buy = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex justify-center items-center gap-5 flex-col">
        <h1 className="title text-center text-5xl capitalize"> how to buy</h1>
        <div className="grid md:grid-cols-2 justify-between items-center gap-5">
          <div className="bg-red-600 p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <EmptyWalletRemove size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl text-white">
                CREATE A WALLET
              </h1>
              <p className="leading-relaxed text-white">
                TO Buy $NFRD, you have Download your preferred wallet, either
                MetaMask or Trust wallet from the App stores, or from your
                chrome store on browser.
              </p>
            </div>
          </div>
          <div className="bg-red-600 p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <EmptyWalletRemove size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl text-white">
                CREATE A WALLET
              </h1>
              <p className="leading-relaxed text-white">
                TO Buy $NFRD, you have Download your preferred wallet, either
                MetaMask or Trust wallet from the App stores, or from your
                chrome store on browser.
              </p>
            </div>
          </div>
          <div className="bg-red-600 p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <EmptyWalletRemove size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl text-white">
                CREATE A WALLET
              </h1>
              <p className="leading-relaxed text-white">
                TO Buy $NFRD, you have Download your preferred wallet, either
                MetaMask or Trust wallet from the App stores, or from your
                chrome store on browser.
              </p>
            </div>
          </div>
          <div className="bg-red-600 p-4 flex items-center gap-4 rounded-lg flex-col md:flex-row transition hover:shadow-2xl">
            <EmptyWalletRemove size="93" color="white" />
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl md:text-4xl text-white">
                CREATE A WALLET
              </h1>
              <p className="leading-relaxed text-white">
                TO Buy $NFRD, you have Download your preferred wallet, either
                MetaMask or Trust wallet from the App stores, or from your
                chrome store on browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
