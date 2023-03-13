import styled from 'styled-components';

export const CharacterPage = styled.div`
  position: relative;
  /* margin: 0 auto; */
  width: 368px;
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const CharacterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 109px;
  padding-right: 109px;
  padding-top: 124px;
  margin-bottom: 34px;
  @media screen and (min-width: 1440px) {
    padding-top: 76px;
    padding-left: 557px;
    padding-right: 583px;
  }
`;

export const Img = styled.img`
  width: 150px;
  border: 5px solid #f2f2f7;
  border-radius: 150px;
  margin-bottom: 34px;
  @media screen and (min-width: 1440px) {
    width: 300px;
    margin-bottom: 16px;
  }
`;

export const CharacterTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.19;
  align-items: center;
  text-align: center;
  color: #081f32;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    line-height: 1.17;
  }
`;

export const Description = styled.div`
  margin-left: 24px;
  margin-right: 32px;
`;

export const DescriptionTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin-bottom: 16px;
  @media screen and (min-width: 1440px) {
    text-align: center;
    margin-bottom: 48px;
  }
`;

export const List = styled.ul`
  width: 312px;
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    width: 413px;
  }
`;

export const Item = styled.li`
  margin-left: 16px;
  padding-top: 9px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const SubTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #081f32;
`;

export const Info = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6e798c;
`;
