import { useState } from 'react'
import './App.css'
import CountButton from './components/CountButton'

function App() {

  return (
    <>
      <h1>Vite<CountButton start="150"/> + React<CountButton /></h1>
      <div className="card">
        <CountButton start="15"/>
        <CountButton />
        <CountButton start="5"/>
        <CountButton />
        <CountButton />
        <button className='countButton'></button>
        <p>
          Edit <CountButton /><code>src/App.jsx</code> and save to test <CountButton />HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the <CountButton /> and <CountButton /> to <CountButton />
      </p>
    </>
  )
}

export default App
