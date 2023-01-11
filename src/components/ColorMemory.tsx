import React, { useState, useEffect } from "react";

const ColorMemoryGame: React.FC = () => {
  // state variables to store the randomly chosen color and user's selected color

  const [showProposedSetColor, setShowProposedSetColor] =
    useState<boolean>(true);
  // state variable to keep track of the score
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [colorSetOptions, setColorSetOptions] = useState<string[]>([]);
  const [tries, setTries] = useState(0);
  // array of solid color hex codes to choose from
  const colorOptions: string[] = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-black",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-cyan-500",
    "bg-gray-500",
  ];


  // function to generate an array of random color options with the proposed color included
  const generateColorOptions = () => {
    let colorOptionArray: string[] = [];
    colorOptionArray.push(
      colorOptions[Math.floor(Math.random() * colorOptions.length)]
    );
    while (colorOptionArray.length < level + 1) {
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      if (colorOptionArray.indexOf(colorOptions[randomIndex]) === -1) {
        colorOptionArray.push(colorOptions[randomIndex]);
      }
    }
    setTimeout(() => {
      setShowProposedSetColor(false);
    }, 3000);
    setColorSetOptions(colorOptionArray);
  };

  // function to handle when the user selects a color
  const handleColorSelection = (color: string) => {
    if (color === colorSetOptions[0]) {
      setScore(score + 10);
      if (score % 100 === 0) setLevel(level + 1);
    } else {
      setTries((prevTrie) => prevTrie + 1);
    }
  };

  // function to handle when the user clicks the reset button
  function startGame() {
    setShowProposedSetColor(true);
    generateColorOptions();
  }
  useEffect(() => {
    startGame();
  }, [score]);

  return (
    <div className="items-center flex justify-center h-screen">
      <div>
        <div>
          Proposed Color:{" "}
          <button
            className={`${showProposedSetColor ? colorSetOptions[0] : ""} p-2`}
          ></button>
        </div>
        <div>Tries: {tries}</div>
        <div>Level: {level}</div>
        <div>
          Color Options:
          {colorSetOptions?.map((color, index) => (
            <div key={index}>
              <button
                className={`${color}`}
                onClick={() => handleColorSelection(color)}
              >
                {color}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorMemoryGame;
