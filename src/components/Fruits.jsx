import React, { useState } from "react";
import "../styles/Fruits.css";

const Fruits = () => {
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

  const changeImages = () => {
    const shuffledImages = [...fruitImages];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    setFruitImages(shuffledImages);
  };
  const getFruitName = (imageName) => {
    const nameWithoutExtension = imageName.split(".")[0];
    const capitalized = nameWithoutExtension.charAt(0).toUpperCase() + nameWithoutExtension.slice(1);
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
            onClick={changeImages}
          ></img>
          <p >{`${getFruitName(image)}`}</p>
        </div>
        </div>
      ))}
      
    </div>
  );
};

export default Fruits;
