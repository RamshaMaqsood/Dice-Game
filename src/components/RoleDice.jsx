import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const RoleDice = ({currentDice, roleDice}) => {
    
  return (
    <DiceContainer>
        <main>
      <div className='image'>
        <img src={`images/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} onClick={roleDice}/>
        <p>Click on Dice to Roll</p>
      </div>
      </main>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.main`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 24px;
}
`