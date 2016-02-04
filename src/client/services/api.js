import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:8081';

export function npmCheck(path) {

  return fetch(baseURL + '/npm-check', {
      method: 'POST',
      body: JSON.stringify({path}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {

      return response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      return json
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Something bad happened'})
    );

}
