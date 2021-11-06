import React from "react";
import styled from "styled-components";

const QuoteStyle = styled.div`
  .left-quotes {
    display: inline-flex;
    transform: rotate(-90deg);
    // border: 1px solid white;
    position: absolute;
    left:-140px;
    font-size:25px;
    top:440px;
  }
  .right-quotes {
    display: inline-flex;
    transform: rotate(90deg);
    // border: 1px solid white;
    position: absolute;
    right:-140px;
    font-size:25px;
    top:280px;
  }
`;

export default function Quotes(props) {
  return (
    <QuoteStyle>
      <div className="left-quotes">
        <span>{props.homeLeftQuotes}</span>
      </div>
      <div className="right-quotes">
        <span>{props.homeRightQuotes}</span>
      </div>
    </QuoteStyle>
  );
}
