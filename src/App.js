import React from "react";
import "./App.css";
import Photos from "./components/Photos/Photos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Photos />
      </section>
      <Footer />
    </div>
  );
};

export default App;
