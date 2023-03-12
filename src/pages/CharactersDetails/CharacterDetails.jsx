import BackLink from '../../components/BackLink/BackLink';

import { useCharacterDetails } from '../../hooks/useCharacterDetails';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import {
  CharacterPage,
  CharacterWrapper,
  Img,
} from './CharactersDetails.styled';

const CharactersDetails = () => {
  const location = useLocation();
  const { character, isLoading } = useCharacterDetails();

  const backLink = location?.state?.from ?? '/';
  const { image, name } = character;

  return (
    <CharacterPage>
      <BackLink to={backLink}>Go Back</BackLink>

      {isLoading && <Loader />}
      <CharacterWrapper>
        <Img src={image} alt={name} />
      </CharacterWrapper>
    </CharacterPage>
  );
};

export default CharactersDetails;
