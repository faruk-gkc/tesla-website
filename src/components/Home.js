import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        titleInfo="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-s.jpg"
      />
      <Section
        title="Model 3"
        titleInfo="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImage="model-3.jpg"
      />
      <Section
        title="Model X"
        titleInfo="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Learn More"
        backgroundImage="model-x.jpg"
      />
      <Section
        title="Model Y"
        titleInfo="Order Online for Touchless Delivery"
        leftBtnText="Learn More"
        rightBtnText="Stay Update"
        backgroundImage="model-y.jpg"
      />
      <Section
        title="Solar and Powerwall"
        titleInfo="Power Everything"
        leftBtnText="Learn More"
        rightBtnText="Existing Inventory"
        backgroundImage="solar-panel.jpg"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
