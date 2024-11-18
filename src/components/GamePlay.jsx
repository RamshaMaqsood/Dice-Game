import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [selectNumber, setSelectNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const roleDice = ()=>{
        if (!selectNumber){
            setError("You have not selected any number")
            return;
        }
        setError("")
        const randomNumber = generateRandomNumber(1,6);
        setCurrentDice((prev)=>randomNumber)

        if(selectNumber === randomNumber){
            setScore((prev)=> prev + randomNumber)
        }else{
            setScore((prev)=>prev - 2)
        }
        setSelectNumber(undefined)
    }

    const resetScore =()=>{
        setScore(0)
    }

  return (

    <MainContainer>

      <div className="top-section">
         <TotalScore 
         score= {score}
         />
         <NumberSelector 
         selectNumber={selectNumber} 
         setSelectNumber={setSelectNumber}
         error={error}
         setError={setError}
         />
      </div>

      <RoleDice 
      currentDice={currentDice} 
      roleDice={roleDice}
      />

      <div className="btns">
         <Button onClick={resetScore}>Reset Scores</Button>
         <OutlineButton
         onClick={()=>setShowRules((prev)=>!prev)}>
        {showRules ? "Hide" :"Show"} Rules</OutlineButton>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
padding-top: 70px;
.top-section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
.btns{
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
`