import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
const characters = '/character';

export async function fetchAllCharacters() {
  const { data } = await axios.get(`${characters}`);
  console.log(data);
  return data;
}

export async function fetchCharacterById(id) {
  const { data } = await axios.get(`${id}`);
  console.log(data);
  return data;
}

export async function fetchFilterCharacters(query) {
  const { data } = await axios.get(`/${characters}/?name=${query}`);

  return data;
}
