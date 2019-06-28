import axios from 'axios';

export default (token) => {
  return axios.create({
    baseURL: 'https://hypechat-t2.herokuapp.com',
    timeout: 5000,
    headers: { 'x-auth-token': token }
  });  
};
