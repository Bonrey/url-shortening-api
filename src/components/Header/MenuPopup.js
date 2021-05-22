import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '../Other/Button';
import { colors } from '../../styles/colors';


const MenuPopup = ({ isMounted }) => {
  return (
    <AnimatePresence>
      {isMounted && <Container
        initial={{ x: "-50%", opacity: 0, scale: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <Links>
          <Item>
            <CustomLink href="#root">Features</CustomLink>
          </Item>
          <Item>
            <CustomLink href="#root">Pricing</CustomLink>
          </Item>
          <Item>
            <CustomLink href="#root">Resources</CustomLink>
          </Item>
        </Links>
        <Divider />
        <Signup>
          <Login href="#root">Login</Login>
          <SignupBtn type="button">Sign Up</SignupBtn>
        </Signup>
      </Container>}
    </AnimatePresence>
  );
}

export default MenuPopup;


const Container = styled(motion.div)`
  background-color: ${colors['dark-violet']};
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.25rem 1rem 2rem;
  box-sizing: border-box;
  width: 86%;
  max-width: 30rem;
  text-align: center;
  border-radius: 1rem;
  z-index: 1;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  margin: 0.75rem 0;

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;

export const Login = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  margin: 1rem 0;
`;

export const CustomLink = styled(Login)`
  margin: 0;
  position: relative;

  &::after {
    transform: scaleX(0);
    transform-origin: center;
    content: "";
    width: 100%;
    height: 0.125rem;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: -0.125rem;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const Divider = styled.hr`
  height: 0.0625rem;
  border: none;
  background-color: ${colors.gray};
  opacity: 0.6;
`;

export const Signup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupBtn = styled(Button)`
  width: 100%;
  height: 2.8rem;
  border-radius: 1.4rem;
`;
