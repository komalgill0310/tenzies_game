import './App.css'
import Die from './components/Die'

function App() {

  function allNewDice(){
    const diceArr = []
    const totalDice = 10
    for (let i = 0; i < totalDice; i++) {
      const dieNum = Math.floor(Math.random()*6) + 1
      diceArr.push(dieNum)      
    }
    console.log(diceArr)
  }

  allNewDice()

  return (
    <main>
      <div className="die-container">
        <Die value={1}/>
        <Die value={2}/>
        <Die value={3}/>
        <Die value={4}/>
        <Die value={5}/>
        <Die value={6}/>
        <Die value={7}/>
        <Die value={8}/>
        <Die value={9}/>
        <Die value={10}/>
      </div>
    </main>
  )
}

export default App
