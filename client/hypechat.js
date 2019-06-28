import axios from 'axios';

export default (token) => {
  return axios.create({
    baseURL: 'https://app-server-t2.herokuapp.com',
    timeout: 5000,
    headers: { 'x-auth-token': token }
  });  
};

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDE1NjJjMDgxOTYwYjAwMDRiZDUyZDAiLCJpYXQiOjE1NjE2ODI2MjR9.zyyNQoZa_i2C_0HICLWRffGmH0Cmbt3tTGc4xgF0zho'
// export default axios.create({
//   baseURL: 'https://localhost:3000/',
//   timeout: 5000,
// });