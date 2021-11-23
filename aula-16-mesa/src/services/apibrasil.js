import axios from 'axios';

const apibr = axios.create({
  baseURL: 'https://brasilapi.com.br'
});

export default apibr;