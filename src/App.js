import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Fruits from "./components/Fruits";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  const [score, setScore] = useState(0);
  const [higherScore, setHigherScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const updateHigherScore = (newScore) => {
    if (newScore > higherScore) {
      setHigherScore(newScore);
    }
  };

  useEffect(() => {
    if (score === 12) {
      togglePopup();
      setScore(0);
    }
  }, [score]);

  return (
    <div className="App">
      {isOpen && <Popup content={<p>Great Job!</p>} handleClose={togglePopup} />}
      <Navbar score={score} higherScore={higherScore} />
      <Fruits
        setScore={setScore}
        updateHigherScore={updateHigherScore}
        score={score}
        togglePopup={togglePopup} // Pass togglePopup to Fruits component
      />
      <Footer />
    </div>
  );
}

export default App;
