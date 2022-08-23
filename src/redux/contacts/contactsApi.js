import axios from 'axios';

axios.defaults.baseURL = 'https://6304c14194b8c58fd7245b9c.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}
