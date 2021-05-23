import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Wrapper as FormWrapper } from '../Form';

import brandRecognition from '../../../assets/icons/brand-recognition.svg';
import detailedRecords from '../../../assets/icons/detailed-records.svg';
import fullyCustomizable from '../../../assets/icons/fully-customizable.svg';
import { desktop } from '../../../styles/responsive';
import { colors } from '../../../styles/colors';


const Features = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Advanced Statistics</Heading>
        <Paragraph>Track how your links are performing across the web with our
          advanced statistics dashboard.</Paragraph>
        <CardsContainer id="cards-container">
          {data.map((el, i) => (
            <CardWrapper key={i}>
              <Card
                id={`card-${i}`}
                icon={el.icon}
                heading={el.heading}
                text={el.text}
              />
            </CardWrapper>
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  );
}

export default Features;


const Wrapper = styled(FormWrapper)`
  padding: 5rem 0;
  margin: 0;

  &::after {
    top: 0;
  }
`;

const Container = styled.section`
  text-align: center;
  width: 86%;
  max-width: 30rem;
  margin: 0 auto;

  @media ${desktop} {
    width: 80%;
    max-width: 64rem;
  }
`;

const CardsContainer = styled.div`
  @media ${desktop} {
    display: flex;
    margin-top: 4rem;
  }
`;

const CardWrapper = styled.div`
  &:not(:last-child) > div > div::after {
    content: "";
    display: block;
    width: 0.5rem;
    height: 3rem;
    background-color: ${colors['button-bg']};
    position: absolute;
    left: calc(50% - 0.25rem);
    bottom: -3rem;
  }

  @media ${desktop} {
    &:first-child > div > div::after {
      width: 1.75rem;
      height: 0.5rem;
      left: 100%;
      top: 50%;
    }

    &:nth-child(2) {
      padding-top: 2rem;

      > div > div::after {
        width: 1.75rem;
        height: 0.5rem;
        left: 100%;
        top: calc(50% - 2rem);
      }
    }

    &:last-child {
      padding-top: 4rem;
    } 
  }
`;

const Heading = styled.h2`
  margin-bottom: 0.75rem;
`;

const Paragraph = styled.p`
  @media ${desktop} {
    max-width: 25rem;
    margin: 0 auto;
    line-height: 1.5rem;
  }
`;

const data = [
  {
    icon: brandRecognition,
    heading: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    icon: detailedRecords,
    heading: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    icon: fullyCustomizable,
    heading: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
];
