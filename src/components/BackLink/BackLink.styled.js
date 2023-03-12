import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkBack = styled(Link)`
  position: absolute;
  left: 24px;
  top: 23px;
  display: flex;
  width: 108px;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;

  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;

  color: #000000;
  @media screen and (min-width: 1440px) {
    left: 50px;
    top: 21px;
  }
`;
