import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import Tada from 'react-reveal/Tada';

import Links from './Links';
import Social from './Social';
import { Logo as HeaderLogo } from '../Header/Header';
import logo from '../../assets/images/logo-footer.svg';
import { desktop, large } from '../../styles/responsive';


const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Tada>
          <Logo src={logo} alt="Shortly Home Logo" onClick={() => window.location.reload()} />
        </Tada>
        <Links />
        <Social />
      </Container>
    </Wrapper>
  );
}

export default Footer;


const Wrapper = styled.footer`
  background-color: ${colors['very-dark-violet']};
  padding: 3rem;
`;

const Container = styled.div`
  text-align: center;

  @media ${desktop} {
    max-width: 64rem;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media ${large} {
    width: 80%;
  }
`;

const Logo = styled(HeaderLogo)`
  margin-bottom: 2rem;
  width: 7rem;
`;
