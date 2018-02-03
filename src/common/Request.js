import { apiUrl } from './config';
import ResponseParser from './ResponseParser';

const esc = encodeURIComponent;

const getUrl = (route) => route.startsWith('http') ? route : `${apiUrl}${route}`;

const Request = {
  get: async (route, params) => {
    const queryString = params ? (
      `?${Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join('&')}`
    ) : '';

    const response = await fetch(`${getUrl(route)}${queryString}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
    });
    ResponseParser.checkStatus(response);
    return await response.json();
  },
};

export default Request;
