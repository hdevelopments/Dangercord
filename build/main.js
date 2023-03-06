import axios from "axios";
export default class Dangercord {
    apiToken = "";
    headers = {};
    constructor(apiToken, headers) {
        if (!apiToken)
            throw new Error("apiToken is required!");
        this.headers = headers;
        this.apiToken = apiToken;
    }
    async getCurrentUser() {
        try {
            return (await axios.get(`https://dangercord.com/api/v1/user/@me`, {
                headers: {
                    ...this.headers,
                    Authorization: `Bearer ${this.apiToken}`,
                },
            })).data;
        }
        catch (exc) {
            return exc.data ? exc.data : exc;
        }
    }
    async getUser(userId) {
        if (!userId)
            throw new Error("userId is required!");
        try {
            return (await axios.get(`https://dangercord.com/api/v1/user/${userId}`, {
                headers: {
                    ...this.headers,
                    Authorization: `Bearer ${this.apiToken}`,
                },
            })).data;
        }
        catch (exc) {
            return exc.data ? exc.data : exc;
        }
    }
    async reportUser(userId, data) {
        if (!data || !userId)
            throw new Error("data and userId is required!");
        try {
            return (await axios.post(`https://dangercord.com/api/v1/user/${userId}/report`, data, {
                headers: {
                    ...this.headers,
                    Authorization: `Bearer ${this.apiToken}`,
                },
            })).data;
        }
        catch (exc) {
            return exc.data ? exc.data : exc;
        }
    }
}
//# sourceMappingURL=main.js.map