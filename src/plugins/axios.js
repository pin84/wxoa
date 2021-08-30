import axios from 'axios'
import qs from 'qs'
import { baseURL  } from '../config/config';
import { Toast } from 'vant';



const service = axios.create({
  baseURL,
  timeout: 50000,
  // headers: { 'Content-Type': 'multipart/form-data' }
})




// Add a request interceptor
service.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration:0
  });

  console.log('---config-==',config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
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
  return service.post(url, params)
}









// export default service