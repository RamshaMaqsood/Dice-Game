import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'



function App() {

  const [startGame, setStartGame] = useState(false)

  const toggleGamePlay = ()=>{
    setStartGame((prev)=>!prev)
  }

  return (
    <>
    {startGame ? <GamePlay/> : <StartGame toggle= {toggleGamePlay}/>}
    </>
  )
}

export default App
