import axios from 'axios';

const API = 'http://hts-team6.northeurope.cloudapp.azure.com:3000/';

export const register = async user => {
  return await axios.post(`${API}user/signup`, user);
};

export const login = async user => await axios.post(`${API}user/login`, user);

// export const profile = async token =>
//   await axios.get(API, {
//     headers: {
//       Authorization: token,
//     },
//   });
