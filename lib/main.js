import axios, { AxiosHeaders } from "axios";
export default class Dangercord {
    apiToken = "";
    headers = new AxiosHeaders();
    constructor(apiToken, headers = new AxiosHeaders()) {
        if (!apiToken)
            throw new Error("apiToken is required!");
        this.headers = headers || {};
        this.headers.setAuthorization(`Bearer ${this.apiToken}`);
    }
    async getCurrentUser() {
        try {
            return (await axios.get(`https://dangercord.com/api/v1/user/@me`, {
                headers: this.headers,
            })).data;
        }
        catch (exc) {
            return exc.data ? exc.data : exc;
        }
    }
    async getUser(userId) {
        if (!userId)
            throw new Error("userId is required!");
        return (await axios.get(`https://dangercord.com/api/v1/user/${userId}`, {
            headers: this.headers,
        })).data;
    }
    async reportUser(userId, data) {
        if (!data || !userId)
            throw new Error("data and userId is required!");
        return (await axios.post(`https://dangercord.com/api/v1/user/${userId}/report`, data, {
            headers: this.headers,
        })).data;
    }
}
