import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import { colors } from '../../../styles/colors';
import { desktop } from '../../../styles/responsive';


const Card = ({ icon, heading, text, last }) => {
  return (
    <Zoom>
      <Container id="card">
        <Icon src={icon} last={last} />
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Container>
    </Zoom>
  );
}


const Container = styled.div`
  background-color: white;
  margin-top: 5rem;
  padding: 1.5rem;
  padding-top: 4rem;
  border-radius: 0.5rem;
  position: relative;

  @media ${desktop} {
    margin: 0 0.75rem;
    text-align: left;
    height: 15rem;
  }

  @media only screen and (min-width: 1100px) {
    height: 12rem;
  }

  @media only screen and (min-width: 1240px) {
    height: auto;
    padding: 4rem 1.8rem 2.1rem;
  }
`;

const Icon = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4.8rem;
  height: 4.8rem;
  top: -2.4rem;
  background: ${colors['very-dark-blue']} ${({ src }) => `url(${src})`} no-repeat center;
  background-size: ${({ last }) => last ? "54%" : "45%"};
  border-radius: 50%;
  z-index: 1;

  &:last-child {
    background-size: 100%;
  }

  @media ${desktop} {
    transform: none;
    left: 10%;
  }
`;

const Heading = styled.h3`
  margin-bottom: 0.75rem;

  @media ${desktop} {
    line-height: 1.4rem;
  }
`;

const Text = styled.p`
  line-height: 1.5rem;
`;

export default Card;
