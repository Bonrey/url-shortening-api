import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../styles/colors';

import close from '../../assets/icons/close.svg';


const InitialPopup = ({ onClick, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && <Wrapper
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, delay: 0 } }}
      >
        <Container
          initial={{ x: "-50%", y: 'calc(-100% - 3rem)' }}
          transition={{ type: 'spring', duration: 1, delay: 2 }}
          animate={{ y: 0 }}
          exit={{ scale: 0, transition: { duration: 0.5, delay: 0 } }}
        >
          <Header>
            <Heading>Welcome!</Heading>
            <CloseBtn tabIndex={0} src={close} alt="close menu" onClick={onClick} />
          </Header>
          <Info>To remove all shortened urls, press <em>Esc</em> button. Also, note that the shortening process might take some time.</Info>
          <Attribution>
            <AttrHeading>Attribution</AttrHeading>
            <Item>Challenge by&nbsp;
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noopener noreferrer'>Frontend Mentor</a>.
            </Item>
            <Item>Created by&nbsp;
              <a href="https://github.com/Bonrey" target="_blank" rel='noopener noreferrer'>Bonrey</a>.
            </Item>
          </Attribution>
        </Container>
      </Wrapper>}
    </AnimatePresence>
  );
}

export default InitialPopup;


const Wrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  z-index: 50;
  background: hsla(0, 0%, 0%, 0.25);
`;

const Container = styled(motion.div)`
  position: absolute;
  top: 2rem;
  left: 50%;
  width: 18rem;
  background-color: ${colors['dark-violet']};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const Header = styled.header`
  margin-bottom: 1rem;
  position: relative;
`;

const Heading = styled.h2`
  color: white;
  text-align: center;
`;

const CloseBtn = styled.img`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  opacity: 0.75;
  transition: 0.3s;
  cursor: pointer;

  &:hover, &:focus {
    opacity: 1;
  }
`;

const Info = styled.p`
  color: white;
`;

const Attribution = styled.section`
  margin-top: 1rem;
`;

const AttrHeading = styled.h3`
  color: white;
  margin-bottom: 0.125rem;
`;

const Item = styled.p`
  color: white;

  a {
    text-decoration: none;
    color: inherit;
    opacity: 0.75;
    font-style: oblique;
    transition: opacity 300ms;
    outline: none;

    &:hover, &:focus {
      opacity: 1;
    }
  }
`;
