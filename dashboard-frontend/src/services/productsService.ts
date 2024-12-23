import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', 
});

export const fetchBestSellers = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchMostPopular = async () => {
  const response = await api.get('/products/popular');
  return response.data;
};

export const fetchOutOfStock = async () => {
  const response = await api.get('/products/out-of-stock');
  return response.data;
};
