import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import Footer from "./components/Footer";

function App() {
  const [score, setScore] = useState(0);
  const [higherScore, setHigherScore] = useState(0);

  const updateHigherScore = () => {
    setHigherScore((prevHigherScore) => {
      if (score > prevHigherScore) {
        return score;
      }
      return prevHigherScore;
    });
  };

  return (
    <div className="App">
      <Navbar score={score} higherScore={higherScore} />
      <Fruits setScore={setScore} setHigherScore={updateHigherScore} />
      <Footer />
    </div>
  );
}

export default App;
