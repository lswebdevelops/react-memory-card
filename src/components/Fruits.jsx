import React, { useState, useRef } from "react";
import "../styles/Fruits.css";
import Popup from "./Popup";

const Fruits = ({ setScore, updateHigherScore, score, togglePopup  }) => {
  const [fruitImages, setFruitImages] = useState([
    "apple.png",
    "banana.png",
    "orange.png",
    "strawberry.png",
    "pineapple.png",
    "mango.png",
    "watermelon.png",
    "grapes.png",
    "kiwi.png",
    "pear.png",
    "papaya.png",
    "melon.png",
  ]);

  const previousImageRef = useRef(null);

  
    
 

  const resetScore = () => {
    setScore(0);
  };

  const scoreUp = () => {
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      if (newScore === 12) {
        togglePopup(); // Open the popup
        resetScore(); // Restart the score if it reaches 12
      }
      updateHigherScore(newScore); // Update higherScore with the new score
      return newScore;
    });
  };
  

  const changeImages = (image) => {
    const shuffledImages = [...fruitImages];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }
    setFruitImages(shuffledImages);

    if (previousImageRef.current === image) {
      resetScore(); // Reset score if the same fruit is clicked
      updateHigherScore(score); // Update higherScore with the previous score
    } else {
      scoreUp(); // Increase score if a different fruit is clicked
    }

    previousImageRef.current = image;
  };

  const getFruitName = (imageName) => {
    const nameWithoutExtension = imageName.split(".")[0];
    const capitalized =
      nameWithoutExtension.charAt(0).toUpperCase() +
      nameWithoutExtension.slice(1);
    return capitalized;
  };

  return (
    <div className="fruits-container">
      {fruitImages.map((image, index) => (
        <div className="img-name-container" key={index}>
          <div className="fruits">
            <img
              className="fruits-img"
              src={require(`../images/${image}`)}
              alt={image.split(".")[0]}
              onClick={() => changeImages(image)}
            ></img>
            <p>{`${getFruitName(image)}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fruits;
