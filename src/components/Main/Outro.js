import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import Bounce from 'react-reveal/Bounce';

import { GetStartedBtn } from './Intro';
import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';
import { desktop } from '../../styles/responsive';


const Outro = () => {
  return (
    <Container>
      <Bounce>
        <Heading>Boost your links today</Heading>
        <GetStartedBtn>Get Started</GetStartedBtn>
      </Bounce>
    </Container>
  );
}

export default Outro;


const Container = styled.div`
  padding: 4rem 0;
  background: ${colors['dark-violet']} url(${bgBoostMobile}) no-repeat top right;
  background-size: contain;
  text-align: center;

  @media ${desktop} {
    background: ${colors['dark-violet']} url(${bgBoostDesktop}) no-repeat top right;
    background-size: cover;
  }
`;

const Heading = styled.h2`
  color: white;
  margin-bottom: 1rem;

  @media ${desktop} {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;
