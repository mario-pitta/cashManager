import Pessoa from "@core/models/Pessoa";
import React from "react";
import { api } from "./fetch";

export default class AuthService {

  constructor() { }

  async login(email: string, password: string) {
    const payload = {
      email: email,
      password: password,
    };

    console.log(payload);
    return await api("/auth/login", "POST", payload)
      .then((res) => res)
      .catch((err) => err);
  }

  async signup(pessoa: Pessoa) {
    return await api("/user", "POST", pessoa)
      .then((res) => res)
      .catch((err) => err);
  }

  setUser(user: Pessoa) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser(): Pessoa {
    const user = JSON.parse(localStorage.getItem("user") as string) || null;
    return user;
  } 
  
  logout() {
    localStorage.removeItem("user")
    document.location.href = '/auth/login'
  }
}
