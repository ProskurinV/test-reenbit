import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
        setError('Can`t load character!');
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
