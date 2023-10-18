import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)


  
  const addValue = ()=>{
    counter = counter + 1
    console.log(counter ,"clicked");
    setCounter(counter)
  }

  const removeValue = ()=>{
    counter = counter -1
    setCounter(counter)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter value: {counter}</h3>
      <button
      onClick={addValue} disabled={counter >=20}
      >Add value {counter}</button> <br /><br />
      <button
      onClick={removeValue} disabled = {counter <= 0}
      >decreas value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
