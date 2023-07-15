import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Die from './components/Die'

function App() {
  const [dieValuesArr, setDieValuesArr] = useState(allNewDice())
  
  function allNewDice(){
    const diceArr = []
    const totalDice = 10
    for (let i = 0; i < totalDice; i++) {
      diceArr.push(createDieObject())      
    }
    return diceArr
  }

  function createDieObject(){
    return {id: nanoid(), value: Math.floor(Math.random()*6) + 1, isHeld: false}
  }

  const diceElements = dieValuesArr.map((dieValue) => (
      <Die key={dieValue.id}
          value={dieValue.value}
          isHeld={dieValue.isHeld}
          holdDice={() => holdDice(dieValue.id)}
      />
    ))

  function handleRollDiceButtonClick(){
    setDieValuesArr(prevDieValues => prevDieValues.map(die => {
      return die.isHeld ? die : createDieObject()
    }))
  }

  function holdDice(diceId){
    setDieValuesArr((prevDieValuesArr) =>
      prevDieValuesArr.map((die) => {
        return die.id === diceId ? {...die, isHeld: !die.isHeld} : die
      })
    );
  }

  return (
    <main>
      <div className="die-container">
        {diceElements}
      </div>
      <button onClick={handleRollDiceButtonClick} className="btn-roll-dice">Roll</button>
    </main>
  )
}

export default App
