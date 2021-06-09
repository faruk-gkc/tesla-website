import React from "react";
import styled from "styled-components";
const Section = () => {
  return (
    <Wrapper>
      <SectionText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </SectionText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("./images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SectionText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  text-transform: uppercase;
  height: 40px;
  width: 250px;
  border-radius: 100px;
  display: flex;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  letter-spacing:2px;
  margin:10px;
`;
const RightButton = styled(LeftButton)`
    background-color: #fff;
    color:#000;
    opacity:.65
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 2s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
    /* background-color: bisque; */
`
