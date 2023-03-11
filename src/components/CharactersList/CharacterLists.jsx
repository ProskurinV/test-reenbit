import { Link, useLocation } from 'react-router-dom';
import {
  CharacterCard,
  Img,
  CharacterList,
  Description,
  Name,
  Species,
} from './CharactersList.styled';

import { routes } from '../../routes';

export const CharactersList = ({ characters }) => {
  const location = useLocation();

  return (
    <CharacterList>
      {characters &&
        characters.map(({ image, name, species, id }) => (
          <Link
            key={id}
            to={`/${routes.CHARACTERDETAILS}/${name}`}
            state={{ from: location }}
          >
            <CharacterCard>
              <Img src={image} alt={name} />
              <Description>
                <Name> {name}</Name>
                <Species>{species}</Species>
              </Description>
            </CharacterCard>
          </Link>
        ))}
    </CharacterList>
  );
};
