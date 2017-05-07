import 'whatwg-fetch';

let apiKey;

function config(key) {
  apiKey = key;
}

function url(formName) {
  return `https://formbotapp.com/${apiKey}/${formName}`;
}

function submit(formName, params) {
  return fetch(url(formName), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
}

export default {
  config,
  submit
};
