import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CharacterPage = styled.div`
  position: relative;
  margin: 0 auto;
  width: 368px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const CharacterWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* padding-left: 109px;
  padding-right: 109px;
  padding-top: 124px; */
  /* @media screen and (min-width: 1440px) {
    padding-top: 76px;
    padding-left: 557px;
    padding-right: 583px;
  } */
`;

export const Img = styled.img`
  width: 150px;

  border: 5px solid #f2f2f7;
  border-radius: 150px;
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

// export const MovieTitle = styled.h2`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
//   font-weight: 700;
//   line-height: 1.17;
//   text-transform: uppercase;
//   color: #000000;
//   padding-top: 20px;
//   margin-bottom: 20px;
// `;

// export const OverTitle = styled.p`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// export const Overview = styled.p`
//   font-size: 16px;
//   line-height: 1.17;
//   color: #000000;
//   margin-bottom: 10px;
//   width: 80%;
// `;

// export const VoteTitle = styled.p`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// export const Vote = styled.p`
//   font-size: 16px;
//   line-height: 1.17;
//   color: #000000;
//   margin-bottom: 10px;
// `;

// export const GenresTitle = styled.p`
//   font-size: 20px;
//   font-weight: 700;
//   margin-bottom: 10px;
// `;

// export const Genres = styled.p`
//   font-size: 16px;
//   line-height: 1.17;
//   color: #000000;
//   margin-bottom: 10px;
// `;

// export const AddTitle = styled.h3`
//   display: flex;
//   justify-content: flex-start;
//   font-size: 20px;
//   font-weight: 700;
//   line-height: 1.17;
//   text-transform: uppercase;
//   color: #000000;
//   padding-top: 20px;
//   padding-left: 20px;
//   margin-bottom: 10px;
// `;
