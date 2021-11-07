import React from "react";
import styled from "styled-components";

const QuoteStyle = styled.div`
  .left-quotes {
    display: inline-flex;
    transform: rotate(-90deg);
    // border: 1px solid white;
    position: absolute;
    left: -140px;
    font-size: ${(props) => props.fontSize};
    top: 440px;
  }
  .right-quotes {
    display: inline-flex;
    transform: rotate(90deg);
    // border: 1px solid white;
    position: absolute;
    right: -140px;
    font-size: 25px;
    top: 280px;
  }
`;

export default function Quotes({ fontSize, homeLeftQuotes, homeRightQuotes }) {
  return (
    <QuoteStyle fontSize={fontSize}>
      <div className="left-quotes">
        <span>{homeLeftQuotes}</span>
      </div>
      <div className="right-quotes">
        <span>{homeRightQuotes}</span>
      </div>
    </QuoteStyle>
  );
}
