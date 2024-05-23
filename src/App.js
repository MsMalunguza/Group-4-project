<<<<<<< HEAD
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Card from "./Components/Card";

function App() {
    return(
        <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Card></Card>
        <Footer></Footer>
        </div>
    );
=======
// src/App.js
import React from 'react';
import Notification from './Components/Notification';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1>Header</h1>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <Notification />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
>>>>>>> bsc-inf-14-21
}

export default App;