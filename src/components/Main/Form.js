import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import { Button } from '../Other/Button';
import { colors } from '../../styles/colors';
import bgShortenMobile from '../../assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg';
import { desktop, large } from '../../styles/responsive';


const Form = ({ onChange, onFocus, value, onClick, inputError, loading }) => {
  const [error, setError] = useState('');
  useEffect(() => {
    setTimeout(() => setError(inputError), (1 - !!inputError) * 400);
  }, [inputError]);

  return (
    <Wrapper>
      <Zoom>
        <Container onSubmit={e => e.preventDefault()} inputError={inputError}>
          <Input
            placeholder="Shorten a link here..."
            onChange={onChange}
            onFocus={onFocus}
            value={value}
            inputError={inputError}
            aria-label="Shorten a link here"
          />
          <ErrorMessage inputError={inputError}>
            Please {error === 'invalid' ? 'enter a valid url' : 'add a link'}
          </ErrorMessage>
          <ShortenBtn
            type="submit"
            onClick={onClick}
            inputError={inputError}
            disabled={loading}
          >
            {loading ? <span /> : 'Shorten It!'}
          </ShortenBtn>
        </Container>
      </Zoom>
    </Wrapper>
  );
}

export default Form;


export const Wrapper = styled.div`
  position: relative;
  margin-top: 5rem;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    top: 50%;
    height: 100%;
    z-index: -1;
    background-color: ${colors['main-bg']};
  }
`;

const Container = styled.form`
  background: ${colors['dark-violet']} url(${bgShortenMobile}) no-repeat top right;
  background-size: 70%;
  width: 86%;
  max-width: 30rem;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  transition: height 0.4s;
  height: ${({ inputError }) => inputError ? '10.05rem' : '8.925rem'};

  @media ${desktop} {
    width: 80%;
    max-width: 64rem;
    height: auto;
    padding: 2.4rem;
    background: ${colors['dark-violet']} url(${bgShortenDesktop}) no-repeat top right;
    background-size: 100% 100%;
  }

  @media ${large} {
    padding: 2.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 2.4rem;
  outline: none;
  border-width: 0.125rem;
  border-style: solid;
  border-color: ${({ inputError }) => inputError ? colors.error : "transparent"};
  color: ${({ inputError }) => inputError ? colors.error : colors['very-dark-blue']};
  box-sizing: border-box;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  padding: 0 0.625rem;
  transition: border-color 0.4s, color 0.4s;

  &::placeholder {
    transition: color 0.4s;
    color: ${({ inputError }) => inputError ? colors.error : colors['grayish-violet']};
    opacity: 0.5;
  }

  @media ${desktop} {
    width: 80%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.4rem;
    font-size: 1rem;
  }
`;

const ErrorMessage = styled.p`
  position: absolute;
  font-style: italic;
  font-size: 0.625rem;
  margin-top: 0.25rem;
  margin-left: 0.125rem;
  color: ${colors.error};
  opacity: ${({ inputError }) => inputError ? 1 : 0};
  transition: opacity 0.4s;

  @media ${desktop} {
    font-size: 0.75rem;
  }
`;

const ShortenBtn = styled(Button)`
  width: 100%;
  height: 2.4rem;
  margin-top: 1.125rem;
  transform: ${({ inputError }) => inputError ? 'translateY(1.125rem)' : 'translateY(0)'};
  transition: transform 0.4s;
  border-radius: 0.25rem;

  @media ${desktop} {
    width: 17%;
    margin-left: 3%;
    margin-top: 0;
    transform: none;
    height: 3rem;
    border-radius: 0.4rem;
  }

  @keyframes dots {
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.75rem 0 0 rgba(0, 0, 0, 0), 1.5rem 0 0 rgba(0, 0, 0, 0);
    }
    40% {
      color: white;
      text-shadow: 0.75rem 0 0 rgba(0, 0, 0, 0), 1.5rem 0 0 rgba(0, 0, 0, 0);
    }
    60% {
      text-shadow: 0.75rem 0 0 white, 1.5rem 0 0 rgba(0, 0, 0, 0);
    }
    80%,
    100% {
      text-shadow: 0.75rem 0 0 white, 1.5rem 0 0 white;
    }
  }

  span::after {
    content: " .";
    display: inline;
    font-size: 3rem;
    margin-right: 1.5rem;
    line-height: 0rem;
    animation: dots steps(5, end) 1.5s infinite;
  }
`;
