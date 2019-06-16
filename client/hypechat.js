import axios from 'axios';

export default axios.create({
  baseURL: 'https://app-server-t2.herokuapp.com',
  timeout: 5000,
  headers: { 'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDA2OGFhZDNlM2U3YjAwMDQ4ZTliYzIiLCJpYXQiOjE1NjA3MDk4MDV9.2NlibOGB-SXSJWlQ3lTYbFIp8EnRZ4DsOaISD60v-gQ' }
});

// export default axios.create({
//   baseURL: 'https://localhost:3000/',
//   timeout: 5000,
// });