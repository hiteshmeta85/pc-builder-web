import axios from 'axios';

const httpClient = ({method, url, data, responseType}) => {
  return axios({
    method,
    url,
    data,
    headers: {Accept: 'application/json'},
    responseType,
    withCredentials: true
  })
}

export default httpClient