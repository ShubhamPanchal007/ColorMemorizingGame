import React, { useState, useEffect } from "react";
import { shuffleArray } from "./utils";
import BgImage from "../assets/mainBg2.jpg";
import correctAnsSound from "../assets/Sounds/correctAnswer.wav";
import wrongAnsSound from "../assets/Sounds/wrongAnswer.wav";
import stamp from "../assets/Stamp.png";
import Confetti from "./Confetti";
import Modal from "./Modal";
const ColorMemoryGame: React.FC = () => {
  // state variables to store the randomly chosen color and user's selected color

  const [showOptions, setshowOptions] = useState<boolean>(true);
  // state variable to keep track of the score

  const [level, setLevel] = useState<number>(1);
  const [colorSetOptions, setColorSetOptions] = useState<string[]>([]);
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [answer, setAnswer] = useState("");
  const [showModal, setShowModal] = useState(true);

  // array of solid color hex codes to choose from
  const colorOptions: string[] = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-cyan-500",
  ];
  // function to generate an array of random color options with the proposed color included
  const generateColorOptions = () => {
    let colorOptionArray: string[] = [];
    let answer = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    colorOptionArray.push(answer);
    while (colorOptionArray.length < level + 1) {
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      if (colorOptionArray.indexOf(colorOptions[randomIndex]) === -1) {
        colorOptionArray.push(colorOptions[randomIndex]);
      }
    }
    setTimeout(() => {
      setshowOptions(false);
    }, 2000);
    let finalOptions = shuffleArray(colorOptionArray);
    finalOptions.unshift(answer);
    setColorSetOptions(finalOptions);
  };

  // function to handle when the user selects a color
  const handleColorSelection = (color: string) => {
    if (color === colorSetOptions[0]) {
      setAnswer("WIN!");
      setScore((score) => score + 5);
      let correctAudio = new Audio(correctAnsSound);
      correctAudio.play();

      if (score % 25 == 0) {
        if (level >= 7) {
          setAnswer("CONGRATULATIONS WINNER!!");
        }
        setLevel((level) => (level < 7 ? level + 1 : level));
      }
    } else {
      setAnswer("WRONG!");
      let wrongAudio = new Audio(wrongAnsSound);
      wrongAudio.play();
      setTries((prevTrie) => prevTrie + 1);
      if (tries > 9) {
        setAnswer("GAMEOVER");

        setTimeout(() => {
          startGame();
          setScore(5);
          setLevel(1);
          setTries(0);
          setshowOptions(true);
        }, 3000);
      }
    }
  };
  function toggle() {
    setShowModal((prevState) => !prevState);
  }
  // function to handle when the user clicks the reset button
  function startGame() {
    setshowOptions(true);
    generateColorOptions();
    setAnswer("");
  }
  useEffect(() => {
    setTimeout(() => {
      startGame();
    }, 1500);
  }, [score]);

  return (
    <>
      {showModal ? <Confetti /> : ""}
      <Modal showModal={showModal} toggle={toggle} />
      <img
        src={BgImage}
        alt=""
        className="w-screen h-screen absolute z-[-1] bg-blend-darken object-cover"
      />
      <div className="flex justify-center">
        <img src={stamp} className={"absolute "} />
      </div>

      <div className="items-center flex justify-center h-screen ">
        <div className="text-center text-white space-y-10">
          <div className="font-semibold text-2xl backdrop-blur-md bg-black bg-opacity-30 gap-y-2 h-20 flex justify-center flex-col items-center rounded-lg border-black border-2">
            <div> Level: {level}</div>
            <div>Tries: {tries}</div>
          </div>
          <div className="bg-opacity-30 bg-black backdrop-blur-md rounded-lg h-24 items-center flex justify-center border-black border-2">
            <div>
              <button
                className={`${
                  !showOptions ? colorSetOptions[0] : "bg-white"
                } rounded-lg p-8 `}
              ></button>
            </div>
            <div className="absolute text-black  text-3xl font-Game">
              {answer}
            </div>
          </div>

          <div
            className={
              "grid grid-cols-3 gap-5 bg-opacity-30 bg-black backdrop-blur-md  rounded-lg p-5 items-center justify-center border-black border-2 grid-template-cols-4"
            }
          >
            {showOptions
              ? colorSetOptions?.map((color, index) =>
                  index === 0 ? (
                    ""
                  ) : (
                    <div key={index}>
                      <button
                        disabled={showOptions ? true : false}
                        className={`${color} p-8 rounded-lg`}
                        onClick={() => handleColorSelection(color)}
                      ></button>
                    </div>
                  )
                )
              : ""}
            {!showOptions
              ? colorSetOptions?.map((color, index) =>
                  index === 0 ? (
                    ""
                  ) : (
                    <div key={index}>
                      <button
                        className={`bg-white p-8 rounded-lg`}
                        onClick={() => handleColorSelection(color)}
                      ></button>
                    </div>
                  )
                )
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorMemoryGame;
