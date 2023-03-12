import { fetchAllCharacters } from '../api/rickAndMortyApi';
import { useEffect, useState } from 'react';

export const useAllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setIsLoading(true);
        const response = await fetchAllCharacters();
        const characters = response.results;

        const sortedCharactersSorted = characters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        // charactersSorted.forEach(character => {
        //   console.log(character.name);
        // });

        setAllCharacters(sortedCharactersSorted);
      } catch {
        setError('Can`t load characters!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacter();
  }, []);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  return { allCharacters, isLoading };
};
