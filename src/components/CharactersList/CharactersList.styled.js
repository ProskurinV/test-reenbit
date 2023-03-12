import styled from 'styled-components';

export const CharacterList = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CharacterCard = styled.div`
  width: 312px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  &:hover,
  &:focus {
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
  @media screen and (min-width: 1440px) {
    min-width: 240px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  padding: 12px;
`;

export const Name = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Species = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`;
