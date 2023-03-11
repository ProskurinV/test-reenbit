import styled from 'styled-components';
import IconSearch from '../../images/IconSearch.png';

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 32px;
  width: 312px;

  @media screen and (min-width: 1440px) {
    width: 1020px;
    margin-bottom: 61px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  padding-left: 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &::placeholder {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 1440px) {
    width: 1020px;
  }
`;

export const Icon = styled.div`
  background-image: url(${IconSearch});
  position: absolute;
  top: 48%;
  margin-left: 16px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  cursor: pointer;
`;
