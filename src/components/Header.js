import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a href="#">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIconComponent onClick={() => setBurgerStatus(!burgerStatus)} />
      </RightMenu>
      <BurgerMenu show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(!burgerStatus)} />
        </CloseWrapper>
            {
                cars && cars.map((car,index)=>(
                    <li key={index}>
                        <a href="#">{car}</a>
                  </li>
                ))
            }
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    text-transform: uppercase;
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-transform: uppercase;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const MenuIconComponent = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 300px;
  z-index: 15;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 100px 50px 30px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    list-style: none;
    padding: 12px 0;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    align-items: flex-start;
    width: 100%;
    a {
      font-weight: 500;
      font-size: 0.75rem;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  position: absolute;
  cursor: pointer;
  top: -45px;
  right: -80px;
`;
const CloseWrapper = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
`;
