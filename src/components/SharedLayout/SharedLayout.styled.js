import styled from 'styled-components';
import bacgroundImg from '../../images/title_desc.png';

export const Container = styled.div`
  margin: 0 auto;
  width: 360px;
  padding-top: 92px;
  padding-right: 24px;
  padding-left: 24px;

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-top: 86px;
    padding-bottom: 188px;
    padding-right: 210px;
    padding-left: 210px;
  }
`;

export const Header = styled.div`
  background-image: url(${bacgroundImg});
  width: 312px;
  min-height: 104px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
