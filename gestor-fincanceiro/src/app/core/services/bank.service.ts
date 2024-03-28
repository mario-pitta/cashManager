import { api } from './fetch'

export default class BankService {
    constructor() { }

    async getAll() {
        return await api('/banks', 'GET')
        .then((res) => res)
        .catch((err) => err);
    }
}