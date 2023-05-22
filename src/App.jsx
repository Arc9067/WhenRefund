import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Buy from "./Components/buy";

const App = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero />
      <Buy />
    </div>
  );
};

export default App;
