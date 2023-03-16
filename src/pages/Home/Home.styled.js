import styled from 'styled-components';
import bacgroundImgMob from '../../images/title_mob.png';
import bacgroundImgDesc from '../../images/title_desc.png';

export const Container = styled.div`
  position: relative;

  margin: 0 auto;
  max-width: 1440px;
  padding-top: 92px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 85px;

  @media screen and (width: 1440px) {
    padding-top: 86px;
    padding-right: 210px;
    padding-left: 210px;
    padding-bottom: 188px;
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  margin-bottom: 32px;
  background-image: url(${bacgroundImgMob});
  width: 312px;
  height: 104px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
    background-image: url(${bacgroundImgDesc});
    width: 600px;
    height: 200px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 80px;
  top: 25px;
  display: flex;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  border-radius: 4px;
  justify-content: center;
  width: 150px;
  background: transparent;
  border: 2px solid lightgreen;
  cursor: pointer;
  :hover,
  :focus {
    border-color: green;
    transition: 0.5s ease all;
    transform: scale(1.05);
    color: green;
  }
`;

export const BtnUp = styled.button`
  display: block;
  margin: 30px auto;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.17;
  border-radius: 50%;
  bottom: 20px;
  right: 30px;
  border: none;
  background: lightgreen;
  cursor: pointer;
  padding: 15px;
  cursor: pointer;
  :hover,
  :focus {
    border-color: green;
    transition: 0.5s ease all;
    transform: scale(1.05);
    color: green;
  }
`;
