import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [num1,setsuh] = useState(0)
  

  function addvalue()  {
    setsuh(num1 + 1)
  }
  
  function subvalue(){
    setsuh(num1 - 1)
  }
  return (
    <>
    <h1>chai or react </h1>
    <h2>counter value : {num1} </h2>

    <button onClick={addvalue}> add </button>

    <br />

    <button onClick={subvalue}>subtract</button>

    <h1>the value : {num1}</h1>
    </>


  )
}

export default App
