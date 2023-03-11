import BackLink from '../../components/BackLink/BackLink';

import { useCharacterDetails } from '../../hooks/useCharacterDetails';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import images from '../../images/images.jpg';
// import { FilmCard, Img } from './CharactersDetails.styled';

const CharactersDetails = () => {
  const location = useLocation();
  const { character, isLoading } = useCharacterDetails();

  const backLink = location?.state?.from ?? '/';
  const { image, name } = character;

  return (
    <>
      <BackLink to={backLink}>Back</BackLink>

      {isLoading && <Loader />}

      <FilmCard>
        {image ? (
          <Img src={image} alt={name} />
        ) : (
          <Img src={images} alt={name} />
        )}
      </FilmCard>
    </>
  );
};

export default CharactersDetails;
