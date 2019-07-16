import { api } from '../constants/api';

const getFetch = (method: string, endpoint: string, params?: object | undefined) => {
  return fetch(`${api}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Origin: '',
    },
    body: params ? JSON.stringify(params.body) : null,
  });
};

export default getFetch;
