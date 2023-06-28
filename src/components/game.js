import React, { useState } from "react";
import "./game.css";

function Game() {
  const [usersChoice, setUsersChoice] = useState("");
  const [computersChoice, setComputersChoice] = useState("");
  const [result, setResult] = useState("");
  const [userResult, setUserResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  const handleUserChoice = (choice) => {
    setUsersChoice(choice);
    generateComputerChoice();
    calculateResult(choice, computersChoice);
  };

  const generateComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    setComputersChoice(choices[randomChoice]);
  };

  const calculateResult = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
      setUserResult(userResult + 1);
    } else {
      setResult("Computer wins!");
      setComputerResult(computerResult + 1);
    }
  };

  return (
    <>
      <div className="game-container">
        <h1 className="title">Rock-Paper-Scissors</h1>
        <div className="buttons">
          <button className="rock" onClick={() => handleUserChoice("rock")}>
            Rock
          </button>
          <button className="paper" onClick={() => handleUserChoice("paper")}>
            Paper
          </button>
          <button
            className="scissor"
            onClick={() => handleUserChoice("scissors")}
          >
            Scissors
          </button>
        </div>
      </div>
      <div className="content-of-game">
        <p>Your choice: {usersChoice}</p>
        <p>Computer choice: {computersChoice}</p>
        <h2>Your Score: {userResult}</h2>
        <h2>Computer Score: {computerResult}</h2>
      </div>
    </>
  );
}

export default Game;
