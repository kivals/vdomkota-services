import axios from "axios";

const http = axios.create();

http.defaults.baseURL = `${window.location.origin}/api`;
http.defaults.timeout = 5000;
http.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
http.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";

//Предварительный обработчик перед отправкой на сервер
http.interceptors.request.use(
  (config) => {
    //TODO Записать token в запрос
    return config;
  },
  (error) => {
    //TODO сделать редирект
    return Promise.reject(error);
  }
);

// Обработка ответа от сервера
http.interceptors.response.use(
  (response) => {
    let data;
    //  IE9 response.data is undefined, So you need to use response.request.responseText (string after Stringify)
    if (response.data === undefined) {
      data = JSON.parse(response.request.responseText);
    } else {
      data = response.data;
    }
    return data;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "Request error";
          break;

        case 401:
          error.message = "Unauthorized, please log in";
          break;

        case 403:
          error.message = "access denied";
          break;

        case 404:
          error.message = `Error in request address: ${error.response.config.url}`;
          break;

        case 408:
          error.message = "Request timed out";
          break;

        case 500:
          error.message = "Internal server error";
          break;

        case 501:
          error.message = "Service not implemented";
          break;

        case 502:
          error.message = "Gateway error";
          break;

        case 503:
          error.message = "service is not available";
          break;

        case 504:
          error.message = "Gateway timeout";
          break;

        case 505:
          error.message = "HTTP version is not supported";
          break;

        default:
      }
    }
    return Promise.reject(error);
  }
);

export default http;
