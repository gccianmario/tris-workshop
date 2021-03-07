import './App.css';
import React, { useState } from 'react';
import GameLayout from "./components/GameLayout/GameLayout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return(
      <>
          <Header/>
          <div className={"page-layout"}>
              <GameLayout/>
              <Footer/>
          </div>
      </>
  )
}

export default App;
