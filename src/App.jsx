import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Articles from "./components/blogs/Articles";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
