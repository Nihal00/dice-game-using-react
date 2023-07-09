import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ setError, error, seletedNum, setSelectedNum }) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorhandler = (value) => {
    console.log(value);
    setSelectedNum(value);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === seletedNum}
            key={i}
            onClick={() => numberSelectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
