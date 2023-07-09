import React, { useState } from 'react'
import { styled } from 'styled-components'
import dice1 from "./images/dice/dice_1.png";
import dice2 from "./images/dice/dice_2.png";
import dice3 from "./images/dice/dice_3.png";
import dice4 from "./images/dice/dice_4.png";
import dice5 from "./images/dice/dice_5.png";
import dice6 from "./images/dice/dice_6.png";

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const RollDice = ({currDice, rollDice}) => {

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img
                src={dices[currDice-1]}
                alt='dice1'
            />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`;