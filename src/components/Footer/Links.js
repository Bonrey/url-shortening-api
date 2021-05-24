import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../styles/colors';
import { desktop, large } from '../../styles/responsive';

const linkNames = [
  ["Features", ["Link Shortening", "Branded Links", "Analytics"]],
  ["Resources", ["Blog", "Developers", "Support"]],
  ["Company", ["About", "Our Team", "Careers", "Contact"]]
];

const Links = () => {
  return (
    <Container>
      {linkNames.map(item => (
        <LinkBlock key={item[0]}>
          <SubHeading>{item[0]}</SubHeading>
          {item[1].map((link, i) => (
            <CustomLink
              key={i}
              href="#root"
              whileHover={{ color: "#2acfcf" }}
              whileFocus={{ color: "#2acfcf" }}
              transition={{ duration: 0.3 }}
            >
              {link}
            </CustomLink>
          ))}
        </LinkBlock>
      ))}
    </Container>
  );
}

export default Links;


const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${desktop} {
    flex-direction: row;
    flex-grow: 1;
    justify-content: flex-end;
    margin-right: 5%;
  }
`;

const LinkBlock = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${desktop} {
    align-items: flex-start;
    margin: 0 5%;
  }
`;

const SubHeading = styled.h3`
  color: white;
  margin-bottom: 0.75rem;

  @media ${large} {
    margin-bottom: 1rem;
  }
`;

const CustomLink = styled(motion.a)`
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 400;
  margin: 0.25rem 0;
  outline: none;

  @media ${large} {
    margin: 0.375rem 0;
  }
`;
