import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:8081';

export function npmCheck() {
  return fetch(baseURL + '/npm-check',{})
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
    )
;
}
