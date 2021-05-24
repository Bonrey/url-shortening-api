import { React } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { colors } from '../../styles/colors';
import { desktop } from '../../styles/responsive';
import { Button } from '../Other/Button';
import Flip from 'react-reveal/Flip';


const ShortenedUrl = ({ onClick, fullLink, shortLink, copied, visible, width }) => {
  return (
    <AnimatePresence initial={false}>
      {visible && <Flip bottom>
        <Container
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FullLinkContainer>
            <FullLink tabIndex={-1} href={fullLink} target='_blank' rel='noopener noreferrer'>
              {fullLink}
            </FullLink>
          </FullLinkContainer>
          {width < 1024 && <Divider />}
          <ShortLinkContainer>
            <ShortLink tabIndex={-1} href={shortLink} target='_blank' rel='noopener noreferrer'>
              {shortLink}
            </ShortLink>
          </ShortLinkContainer>
          <CopyBtn type="button" onClick={onClick} copied={copied} disabled={copied}>
            {copied ? 'Copied!' : 'Copy'}
          </CopyBtn>
        </Container>
      </Flip>}
    </AnimatePresence>
  );
}

export default ShortenedUrl;


const Container = styled(motion.div)`
  background-color: white;
  width: 86%;
  max-width: 30rem;
  margin: 0 auto;
  padding: 0 1rem 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  position: relative;

  @media ${desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
    height: 4rem;
    width: 80%;
    max-width: 64rem;
  }
`;

const FullLinkContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${colors['very-dark-blue']};

  @media ${desktop} {
    margin-right: 1.25rem;
    flex-grow: 2;
  }
`;

const FullLink = styled.a`
  color: inherit;
  font-size: 0.875rem;
  line-height: 2.8rem;
  text-decoration: none;
  cursor: pointer;
`;

const ShortLinkContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.75rem 0;
  color: ${colors['button-bg']};
    
  @media ${desktop} {
    text-align: right;
    flex-shrink: 0;
  }
`;

const ShortLink = styled.a`
  color: inherit;
  margin: 0.75rem 0;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;

  @media ${desktop} {
    display: inline;
    margin-left: auto;
  }
`;

const Divider = styled.hr`
  position: absolute;
  left: 0;
  width: 100%;
  border: none;
  height: 0.0625rem;
  background-color: hsla(0, 0%, 75%, 0.4);
`;

const CopyBtn = styled(Button)`
  width: 100%;
  height: 2.2rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  background-color: ${({ copied }) => copied ? colors['dark-violet'] : colors['button-bg']};

  &:hover:enabled {
    background-color: ${({ copied }) => copied ? colors['dark-violet'] : colors['button-hover']};
    cursor: ${({ copied }) => copied ? 'default' : 'pointer'};
  }

  @media ${desktop} {
    flex-shrink: 0;
    width: 5.5rem;
    margin-left: 1.25rem;
  }
`;
