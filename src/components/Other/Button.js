import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from '../../styles/colors';

export const Button = styled(motion.button)`
  border: none;
  outline: none;
  background-color: ${colors["button-bg"]};
  color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0 0.45rem 1.55rem 0;
  transition: background-color 0.3s;

  &:hover:enabled {
    background-color: ${colors["button-hover"]};
    cursor: pointer;
  }

  &:focus-visible {
    background-color: ${colors["button-hover"]};
    outline: 0.125rem dashed ${colors["button-bg"]};
  }
`;
