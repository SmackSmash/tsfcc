import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');
  token
    ? (axios.defaults.headers.common['x-auth-token'] = token)
    : delete axios.defaults.headers.common['x-auth-token'];
  return token;
};
