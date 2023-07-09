import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RollDice from "./RollDice";
import { Button, OutLineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [seletedNum, setSelectedNum] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!seletedNum) {
      setError("You have not selected any number");
      return;
    }

    let randomNumber = generateRanNum(1, 7);

    setCurrDice(() => randomNumber);

    if (parseInt(seletedNum) == parseInt(generateRanNum)) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          seletedNum={seletedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice currDice={currDice} rollDice={rollDice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Rest</OutLineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Roles
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: auto 70px;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
