import axios from 'axios';

const instance = axios.create({
    baseURL = 'http://localhost:8080/'
})
instance.defaults.headers.common['Authorization'] = null;
instance.defaults.headers.post['Content-Type'] = 'application/json';


instance.interceptors.request.use(
    request => {
      console.log('request ' + request);
      request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
      return request;
    },
    error => {
      console.log(error);
      return Promise.reject(error);
    }
  );

export default instance;