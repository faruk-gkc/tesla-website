import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const Section = ({
  title,
  titleInfo,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) => {
  // console.log(props);
  return (
    <Wrapper bgImage={backgroundImage}>
      <Fade bottom>
        <SectionText>
          <h1>{title}</h1>
          <p>{titleInfo}</p>
        </SectionText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const SectionText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  letter-spacing: 2px;
  margin: 10px;
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #000;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animationDown infinite 2s;
  overflow-x: hidden;
`;

const Buttons = styled.div`
  /* background-color: bisque; */
`;
