import React, {useState} from 'react'

import './App.css'
import Die from './components/Die'

function App() {
  const [dieValuesArr, setDieValuesArr] = useState(allNewDice())
  
  function allNewDice(){
    const diceArr = []
    const totalDice = 10
    for (let i = 0; i < totalDice; i++) {
      const dieNum = Math.floor(Math.random()*6) + 1
      diceArr.push(dieNum)      
    }
    return diceArr
  }

  const diceElements = dieValuesArr.map((dieValue,i) => <Die key={i} value={dieValue} />)
  console.log(diceElements);

  function handleRollDiceButtonClick(){
    setDieValuesArr(allNewDice())
  }

  return (
    <main>
      <div className="die-container">
        {diceElements}
      </div>
      <button onClick={handleRollDiceButtonClick}>Roll Dice</button>
    </main>
  )
}

export default App
