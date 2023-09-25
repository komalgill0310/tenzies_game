import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Die from "./components/Die";
import Confetti from "./components/Confetti";
import GameStats from "./components/GameStats";

function App() {
  const [tenzies, setTenzies] = useState(false);
  const [isEffectRun, setIsEffectRun] = useState(false);

  const [time, setTime] = useState(0);
  const [countNumOfRolls, setCountNumOfRolls] = useState(0);

  const [dieValuesArr, setDieValuesArr] = useState(allNewDice());

  useEffect(() => {
    const allDieHeld = dieValuesArr.every((die) => die.isHeld);
    const dieValue = dieValuesArr[0].value;
    const allDieValues = dieValuesArr.every((die) => die.value === dieValue);
    if (allDieHeld && allDieValues) {
      setTenzies(true);
    }
  }, [dieValuesArr]);

  function allNewDice() {
    const diceArr = [];
    const totalDice = 10;
    for (let i = 0; i < totalDice; i++) {
      diceArr.push(createDieObject());
    }
    return diceArr;
  }

  function createDieObject() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function createDiceElements() {
    return dieValuesArr.map((dieValue) => (
      <Die
        key={dieValue.id}
        value={dieValue.value}
        isHeld={dieValue.isHeld}
        holdDice={() => holdDice(dieValue.id)}
      />
    ));
  }

  function handleRollDiceButtonClick() {
    setDieValuesArr((prevDieValues) =>
      prevDieValues.map((die) => {
        return die.isHeld ? die : createDieObject();
      })
    );
    setCountNumOfRolls((prevCount) => (prevCount += 1));
  }

  function holdDice(diceId) {
    setDieValuesArr((prevDieValuesArr) =>
      prevDieValuesArr.map((die) => {
        return die.id === diceId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function resetGame() {
    setDieValuesArr(allNewDice());
    setTenzies(false);
    setIsEffectRun(false);
    setCountNumOfRolls(0);
    setTime(0);
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      {tenzies && <Confetti />}
      <div className="die-container">{createDiceElements()}</div>
      <button
        onClick={tenzies ? resetGame : handleRollDiceButtonClick}
        className="btn-roll-dice"
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
      <GameStats
        time={time}
        setTime={setTime}
        dieValuesArr={dieValuesArr}
        tenzies={tenzies}
        numOfRolls={countNumOfRolls}
        isEffectRun={isEffectRun}
        setIsEffectRun={setIsEffectRun}
      />
    </main>
  );
}

export default App;
