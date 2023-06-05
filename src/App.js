import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [higherScore, setHigherScore] = useState(0);

  const updateHigherScore = (newScore) => {
    if (newScore > higherScore) {
      setHigherScore(newScore);
    }
  };

  return (
    <div className="App">
      <Navbar score={score} higherScore={higherScore} />
      <Fruits setScore={setScore} updateHigherScore={updateHigherScore} />
      <Footer />
    </div>
  );
}

export default App;
