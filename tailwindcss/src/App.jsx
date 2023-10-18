import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {

  
  return (
    <>
      <h1 className="bg-green-600 text-white rounded-2xl p-4 mb-4">tailwind Css</h1>
      < Card myName="ankit" btnText='click me'/>
      < Card myName="ahswani" btnText='visit me'/>
    </>
  )
}

export default App
