

import About from './About'

function App() {
  const addVariable = 'Inject verable'

  return (
    <>
      <h1>This is a Vite React</h1>
      <About />
      <button>Click Me {addVariable}</button>
    </>
  )
}

export default App
