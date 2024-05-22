import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Payments from "./Components/Payments";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Banner></Banner>
      <Card></Card>

      <Footer></Footer>
      <Payments></Payments>
    </div>
  );
}

export default App;
