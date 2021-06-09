import React from "react";
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';


const Header = () => {
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIconComponent/>
      </RightMenu>
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
  @media screen and (max-width:768px){
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
    
`;
