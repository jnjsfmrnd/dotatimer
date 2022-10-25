import './App.css';
import React, { useState } from 'react';

function App() {
  var [gameTime, setGameTime]= useState(0);
  var [gameAction, setGameAction] = useState("WALK TO LANE");
  var [gameActionColor, setGameActionColor] = useState("violet");

  function onClickSyncButton() {
    setGameTime(0);
    var timer = setInterval(() => syncTimer(timer), 1000);
  } 

  function syncTimer(timer) {
    gameTime++
    if (gameTime > 59) {
      gameTime = 0;
    }
    console.log(gameTime)

    if (gameTime >= 0 && gameTime < 5) {
      gameAction = "WALK TO LANE";
      gameActionColor = "red"
    } 
    else if  (gameTime >= 5 && gameTime < 30) {
      gameAction = "FARM LANE CREEPS";
      gameActionColor = "orange"
    }
    else if  (gameTime >= 30 && gameTime < 40) {
      gameAction = "WALK TO JUNGLE";
      gameActionColor = "yellow"
    }
    else if  (gameTime >= 40 && gameTime < 54) {
      gameAction = "FARM JUNGLE CREEPS, PREPARE PULL";
      gameActionColor = "green"
    }
    else if  (gameTime >= 54 && gameTime < 57) {
      gameAction = "PULL NOW IF JUNGLE CREEPS ARE SLEEPING";
      gameActionColor = "blue"
    }
    else if  (gameTime >= 57 && gameTime < 59) {
      gameAction = "PULL NOW IF JUNGLE CREEPS ARE UNDER ATTACK";
      gameActionColor = "indigo"
    }
    setGameActionColor(gameActionColor);
    setGameAction(gameAction);
    setGameTime(gameTime);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Dota Farming Timer</h3>
        <p>
        {gameTime}
        </p>
        <h1 style={{ backgroundColor: gameActionColor}}>
        {gameAction}
        </h1>
        <p
          className="App-link"
          onClick={ () => onClickSyncButton()}
        >
          Sync - (click when in game timer = :00)
        </p>
      </header>
    </div>
  );
}

export default App;
