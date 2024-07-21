import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css" 

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu />
      <Footer/>
     
    </div>
  );
}

export default App;
