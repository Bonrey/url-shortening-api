import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

import { Button } from '../Other/Button';
import { colors } from '../../styles/colors';
import bgShortenMobile from '../../assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg';
import { desktop, large } from '../../styles/responsive';


const Form = ({ onChange, onFocus, value, onClick, inputError, loading }) => {
  return (
    <Wrapper>
      <Zoom>
        <Container onSubmit={e => e.preventDefault()}>
          <Input
            placeholder="Shorten a link here..."
            onChange={onChange}
            onFocus={onFocus}
            value={value}
            inputError={inputError}
          />
          <ErrorMessage inputError={inputError}>
            Please {inputError === 'empty' ? 'add a link' : 'enter a valid url'}
          </ErrorMessage>
          <ShortenBtn
            type="button"
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

  @media ${desktop} {
    width: 80%;
    max-width: 64rem;
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

  &::placeholder {
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

  @media ${desktop} {
    font-size: 0.75rem;
  }
`;

const ShortenBtn = styled(Button)`
  width: 100%;
  height: 2.4rem;
  margin-top: ${({ inputError }) => inputError ? '2.25rem' : '1.125rem'};
  border-radius: 0.25rem;

  @media ${desktop} {
    width: 17%;
    margin-top: 0;
    margin-left: 3%;
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
