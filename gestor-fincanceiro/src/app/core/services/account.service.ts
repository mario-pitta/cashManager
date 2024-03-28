import { api } from "./fetch";

export default class AccountService {
  async getByUser(id: number) {
    const url = "/account/user/" + id;

    return await api(url, "GET")
      .then((res) => res)
      .catch((err) => err);
  }
}
