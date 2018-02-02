import { apiUrl } from './config.json';
import ResponseParser from './ResponseParser';


const esc = encodeURIComponent;


const getUrl = (route) => route.startsWith('http') ? route : `${apiUrl}${route}`;

const isJsonResponse = (response) => {
  const contentType = response.headers.get("content-type");
  return contentType && contentType.indexOf("application/json") !== -1
};

const putPost = async (route, body, headers, method) => {
  const response = await fetch(getUrl(route), {
    headers: { ...headers },
    body,
    method,
    credentials: 'include',
  });
  ResponseParser.checkStatus(response);
  return isJsonResponse(response) ? await response.json() : response;
};

const putFile = async (route, body, headers) => {
  const response = await fetch(getUrl(route), {
    headers: { ...headers },
    body,
    method: 'PUT',
  });
  ResponseParser.checkStatus(response);
  return isJsonResponse(response) ? await response.json() : response;
};

const Request = {
  get: async (route, params) => {
    const queryString = params ? (
      `?${Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&')}`
    ) : '';

    const response = await fetch(`${getUrl(route)}${queryString}`, {
      method: 'GET',
      credentials: 'include',
    });
    ResponseParser.checkStatus(response);
    return await response.json();
  },

  post: async (route, body, headers) => putPost(route, JSON.stringify(body), headers, 'POST'),
  put: async (route, body, headers) => putPost(route, JSON.stringify(body), headers, 'PUT'),
  putFile: async (route, body, headers) => putFile(route, body, headers),

};

export default Request;
