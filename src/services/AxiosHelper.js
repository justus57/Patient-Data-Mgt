import axios from 'axios';
let BaseURL = 'http://192.168.8.11:8000/api/v1/';

// if (process.env.REACT_APP_STAGE === 'production') {
//   BaseURL = `${window.location.protocol}//${window.location.host}/users/`;
// }
// console.log(process.env.REACT_APP_STAGE);

const AxiosHelper = axios.create({
  baseURL: BaseURL,
});

export default AxiosHelper;
