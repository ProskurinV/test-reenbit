import styled from 'styled-components';
import bacgroundImgMob from '../../images/title_mob.png';
import bacgroundImgDesc from '../../images/title_desc.png';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding-top: 92px;
  padding-right: 24px;
  padding-left: 24px;
  padding-bottom: 85px;

  @media screen and (min-width: 1440px) {
    padding-top: 86px;
    padding-right: 210px;
    padding-left: 210px;
    padding-bottom: 142px;
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
