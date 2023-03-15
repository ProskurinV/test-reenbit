import BackLink from '../../components/BackLink/BackLink';
import { useState } from 'react';
import { useCharacterDetails } from '../../hooks/useCharacterDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
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
import { Button } from '../Home/Home.styled';

const CharactersDetails = () => {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const { character, isLoading } = useCharacterDetails();

  const backLink = location?.state?.from ?? '/';
  const { image, name, gender, status, species, type, origin } = character;

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <>
      {isLoading && <Loader />}
      <CharacterPage>
        <BackLink to={backLink}>Go Back</BackLink>
        <Button type="button" onClick={() => signUserOut()}>
          Sign Out
        </Button>

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
