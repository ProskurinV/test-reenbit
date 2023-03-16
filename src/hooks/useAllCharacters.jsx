import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { fetchFilterCharacters } from '../api/rickAndMortyApi';

export const useAllCharacters = (query, page) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        setIsLoading(true);
        const response = await fetchFilterCharacters(query, page);

        const characters = response.results;
        const sortedCharacters = characters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setAllCharacters(sortedCharacters);
      } catch {
        Notiflix.Notify.failure('Can`t load characters!');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacter();
  }, [query, page]);

  useEffect(() => {
    if (error !== false) {
      Notiflix.Notify.failure('erorr');
    }
  }, [error]);

  return {
    allCharacters,
    isLoading,
  };
};
