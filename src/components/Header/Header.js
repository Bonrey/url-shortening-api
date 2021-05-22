import React from 'react';
import styled from 'styled-components';

import { Button } from '../Other/Button';
import MenuPopup from './MenuPopup';
import {
  Login as PopupLogin,
  CustomLink as CustomPopupLink,
  Signup as PopupSignup
} from './MenuPopup';

import logo from '../../assets/images/logo-header.svg';
import menu from '../../assets/icons/menu.svg';
import closeMenu from '../../assets/icons/close-menu.svg';
import { colors } from '../../styles/colors';
import { desktop } from '../../styles/responsive';


const Header = ({ onClick, menuVisible, width }) => {
  return (
    <Container>
      <Logo src={logo} alt="Shortly Home Logo" onClick={() => window.location.reload()} />
      {width < 1024 ?
        <MenuBtn
          type="button"
          menuVisible={menuVisible}
          onClick={() => onClick('menu')}
        /> :
        <>
          <Links>
            <CustomLink href="#root">Features</CustomLink>
            <CustomLink href="#root">Pricing</CustomLink>
            <CustomLink href="#root">Resources</CustomLink>
          </Links>
          <Signup>
            <Login href="#root">Login</Login>
            <SignupBtn type="button">Sign Up</SignupBtn>
          </Signup>
        </>
      }
      {width < 1024 && <MenuPopup isMounted={menuVisible} />}
    </Container>
  );
}

export default Header;


const Container = styled.header`
  height: 5rem;
  width: 86%;
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${desktop} {
    width: 80%;
    max-width: 64rem;
    height: 7rem;
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  width: 6rem;
  cursor: pointer;

  @media ${desktop} {
    width: 7rem;
  }
`;

const MenuBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  transition: transform 0.4s;
  transform: ${({ menuVisible }) => `rotate(${menuVisible * 360}deg)`};
  
  &::before {
    content: '';
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url(${closeMenu}) no-repeat center;
    transition: opacity 0.2s ease-out;
    transition-delay: ${({ menuVisible }) => `${menuVisible * 0.2}s`};
    opacity: ${({ menuVisible }) => +menuVisible};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: url(${menu}) no-repeat center;
    transition: opacity 0.2s ease-out;
    transition-delay: ${({ menuVisible }) => `${(1 - menuVisible) * 0.2}s`};
    opacity: ${({ menuVisible }) => +!menuVisible};
  }
`;

const Links = styled.div`
  margin-left: 2rem;
`;

const CustomLink = styled(CustomPopupLink)`
  color: ${colors['grayish-violet']};
  margin: 0 0.75rem;
  transition: color 0.3s;

  &:hover {
    color: ${colors['very-dark-blue']};
  }
`;

const Signup = styled(PopupSignup)`
  flex-direction: row;
  margin-left: auto;
`;

const Login = styled(PopupLogin)`
  color: ${colors['grayish-violet']};
  margin-right: 1.5rem;
`;

const SignupBtn = styled(Button)`
  width: 6.8rem;
  height: 2.4rem;
  border-radius: 1.2rem;

  @media ${desktop} {
    width: 7rem;
    height: 2.6rem;
    border-radius: 1.3rem;
  }
`;
