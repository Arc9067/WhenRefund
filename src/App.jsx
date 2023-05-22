import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Buy from "./Components/buy";
import Tokenomics from "./Components/Tokenomics";
import Join from "./Components/Join";

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero />
      <Buy />
      <Tokenomics />
      <Join />
    </div>
  );
};

export default App;
