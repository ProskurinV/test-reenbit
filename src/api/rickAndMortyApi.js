import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacterById(id) {
  const { data } = await axios.get(`/${id}`);
  return data;
}

export async function fetchFilterCharacters(query, page) {
  const { data } = await axios.get(`/?name=${query}&page=${page}`);

  return data;
}
