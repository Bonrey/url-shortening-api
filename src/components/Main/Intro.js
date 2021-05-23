import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Button } from '../Other/Button';
import imageWorking from '../../assets/images/illustration-working.svg';
import { desktop, large } from '../../styles/responsive';


const Intro = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading>More than just shorter links</Heading>
      <Paragraph>Build your brand’s recognition and get detailed insights
        on how your links are performing.</Paragraph>
      <GetStartedBtn>Get Started</GetStartedBtn>
    </Container>
  );
}

export default Intro;


const Container = styled(motion.div)`
  width: 86%;
  max-width: 30rem;
  margin: 0 auto;
  text-align: center;
  padding-top: 20rem;
  
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 6rem;
    width: 100%;
    height: 17rem;
    background: url(${imageWorking}) no-repeat;
    background-size: auto 100%;
    background-position: 2rem;

    @media only screen and (min-width: 550px) {
      background-position: center;
    }
  }

  @media ${desktop} {
    padding: 5rem 0;
    text-align: left;
    width: 80%;
    max-width: 64rem;
    position: relative;

    &::before {
      width: 32rem;
      height: 21rem;
      top: 3rem;
      left: 28rem;
      background-size: contain;
      background-position: right;
    }
  }

  @media ${large} {
    &::before {
      top: 2rem;
      left: auto;
      width: 42rem;
      height: 28rem;
      right: -15rem;
    }
  }
`;

const Heading = styled.h1`
  line-height: 2.5rem;
  margin-bottom: 0.75rem;

  @media ${desktop} {
    font-size: 3rem;
    line-height: 3.4rem;
    width: 25rem;
  }

  @media ${large} {
    width: 35rem;
    line-height: 4.8rem;
    font-size: 4.2rem;
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;

  @media ${desktop} {
    width: 28rem;
    font-size: 1.125rem;
  }

  @media ${large} {
    width: 30rem;
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }
`;

export const GetStartedBtn = styled(Button).attrs({
  type: "submit"
})`
  width: 10rem;
  height: 2.8rem;
  border-radius: 1.4rem;

  @media ${desktop} {
    height: 3rem;
    border-radius: 1.5rem;
  }
`;
