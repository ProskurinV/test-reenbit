import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCharacterById } from '../api/rickAndMortyApi';
import { routes } from '../routes';

export const useCharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCharacterID(id) {
      try {
        setIsLoading(true);
        const response = await fetchCharacterById(id);
        setCharacter(response);
      } catch {
        Notiflix.Notify.failure('Can`t load characters!');
        navigate(routes.HOME, { replace: true });
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacterID(id);
  }, [id, navigate]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  return { character, isLoading };
};
