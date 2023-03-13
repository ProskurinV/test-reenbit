import BackLink from '../../components/BackLink/BackLink';

import { useCharacterDetails } from '../../hooks/useCharacterDetails';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import {
  CharacterPage,
  CharacterWrapper,
  Img,
  CharacterTitle,
  Description,
  DescriptionTitle,
  List,
  Item,
  SubTitle,
  Info,
} from './CharactersDetails.styled';

const CharactersDetails = () => {
  const location = useLocation();
  const { character, isLoading } = useCharacterDetails();

  const backLink = location?.state?.from ?? '/';
  const { image, name, gender, status, species, type, origin } = character;

  return (
    <>
      {isLoading && <Loader />}
      <CharacterPage>
        <BackLink to={backLink}>Go Back</BackLink>

        <CharacterWrapper>
          <Img src={image} alt={name} />
          <CharacterTitle>{name}</CharacterTitle>
        </CharacterWrapper>
        <Description>
          <DescriptionTitle>Informations</DescriptionTitle>
          <List>
            <Item>
              <SubTitle>Gender</SubTitle>
              <Info>{gender}</Info>
            </Item>
            <Item>
              <SubTitle>Status</SubTitle>
              <Info>{status}</Info>
            </Item>
            <Item>
              <SubTitle>Specie</SubTitle>
              <Info>{species}</Info>
            </Item>
            <Item>
              <SubTitle>Origin</SubTitle>
              <Info>{origin && origin.name}</Info>
            </Item>
            <Item>
              <SubTitle>Type</SubTitle>
              <Info>{type ? type : 'Unknown'}</Info>
            </Item>
          </List>
        </Description>
      </CharacterPage>
    </>
  );
};

export default CharactersDetails;
