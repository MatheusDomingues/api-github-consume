import axios from 'axios';

export const client_id = '6028b8cba787b425';
export const secret_id = 'VTkeWpYXKUAnwJd9katXPdeMKl1fZAUlDkIa1BRcJns=';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;