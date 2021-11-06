import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  .btn {
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    position: absolute;
    left: 710px;
    top: 520px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 42px;
    border-radius: 10px;
    border: 4px solid var(--dark-green);
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--dark-green)"};
    color: var(--text-color);
    font-size: 25px;
    cursor: pointer;
    height: 62px;
    font-family: "JetBrains Mono";
  }
  button:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 42px;
    border-radius: 10px;
    border: 4px solid var(--dark-green);
    background-color: ${(props) =>
      props.outline ? "var(--dark-green)" : "transparent"};
    color: var(--text-color);
    font-size: 25px;
    cursor: pointer;
    height: 62px;
    font-family: "JetBrains Mono";
  }
`;

export default function Buttons({ outline, btnTextWork, btnTextHire }) {
  return (
    <ButtonStyle outline={outline}>
      <div className="btn">
        <button type="button">{btnTextWork}</button>
        <button type="button">{btnTextHire}</button>
      </div>
    </ButtonStyle>
  );
}
