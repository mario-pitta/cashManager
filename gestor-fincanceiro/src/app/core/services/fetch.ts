import React from "react";

export async function api(url: string, method: string, body?: any) {
  const API_URL = process.env.REACT_APP_API_URL;
  //   //console.log(API_URL);
  const payload = JSON.stringify(body);
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  };

  //console.log(payload);

  return await fetch(API_URL + url, options)
    .then((res) => res.json())
    .then((json) =>  json)
    // .catch((err) =>  err);
}
