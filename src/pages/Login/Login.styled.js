import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  border-radius: 4px;
  margin: 30vh auto;
  width: 150px;
  background: transparent;
  border: 2px solid lightgreen;
  cursor: pointer;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  :hover,
  :focus {
    color: green;
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    width: 250px;
  }
`;
