import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=40b9cd171d9532635ec61365b799928f",
  });


  axiosInstance.interceptors.request.use(
    function (config) {
      //   SHOW LOADER
      // console.log("INTERCEPTOR", config);
      // Do something before request is sent
      // config.params["api_key"] =
      //   "40b9cd171d9532635ec61365b799928f";
      // return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      // HIDE LOADER
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // HIDE LOADER
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );