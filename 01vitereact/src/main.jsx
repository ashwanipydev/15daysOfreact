import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div>
      <h1>custom app! | chai</h1>
    </div>
  )
}

const reactElments = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  `Click me i'm custom react elements`
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // Myapp () //ye bhi chale ga
   <App />
  // reactElments
  
)
