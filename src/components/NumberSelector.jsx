import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const NumberSelector = ({error, setError, selectNumber, setSelectNumber}) => {

    const arrNumbers = [1,2,3,4,5,6]

    const numberSelectorHandler = (value)=>{
        setSelectNumber(value)
        setError("")
    }

  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
        {arrNumbers.map((value, i)=>(
            <Box 
              isSelect = {value === selectNumber}
              onClick={()=>numberSelectorHandler(value)}
              key={i}>{value}
            </Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700px;
    background-color: ${(props)=>props.isSelect? "black" : "white"};
    color: ${(props)=>props.isSelect? "white" : "black"};
    &:hover{
        cursor: pointer;
    }
`
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700pxs;
    }
    .error{
        color: red;
    }
`