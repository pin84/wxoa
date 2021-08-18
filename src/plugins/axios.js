import axios from 'axios'
import qs from 'qs'
import { baseURL  } from '../config/config';


const service = axios.create({
  baseURL,
  timeout: 5000,

})




// Add a request interceptor
service.interceptors.request.use(function (config) {
  // Do something before request is sent


  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  let {data} = response

  return data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export function get(url, params) {
  return service.get(url, {
    params
  })
}
export function post(url, params) {
  return service.get(url, qs.stringify(params))
}









// export default service