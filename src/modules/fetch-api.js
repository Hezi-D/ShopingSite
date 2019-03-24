import fetch from "isomorphic-fetch";
require("es6-promise").polyfill();

export default function fetchApi(method, url, data) {
  const body =
    method.toLowerCase() === "get" ? {} : { body: JSON.stringify(data) };

  return fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Conect-Type": "application/json",
      "X-requested-With": "XML"
    },
    credentials: "smae-origin",
    ...body
  }).then(response => response.json());
}
