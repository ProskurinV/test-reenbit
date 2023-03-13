import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character';

export async function fetchAllCharacters() {
  const { data } = await axios.get('');

  return data;
}

export async function fetchCharacterById(id) {
  const { data } = await axios.get(`/${id}`);
  return data;
}

export async function fetchFilterCharacters(name) {
  const { data } = await axios.get(`?name=${name}`);

  return data;
}
