import axios, { AxiosHeaders } from "axios";
import {
  DangercordResponse,
  DangercordErrorResponse,
  DangercordReportUserParams,
} from "./models/Dangercord.js";

export default class Dangercord {
  private apiToken: string = "";
  private headers?: AxiosHeaders = {} as AxiosHeaders;
  constructor(
    apiToken: string,
    headers: AxiosHeaders = {} as AxiosHeaders
  ) {
    if (!apiToken) throw new Error("apiToken is required!");
    this.headers = headers || {};
    this.headers.setAuthorization(`Bearer ${this.apiToken}`)
  }

  async getCurrentUser() {
    try {
      return (
        await axios.get(`https://dangercord.com/api/v1/user/@me`, {
          headers: this.headers,
        })
      ).data as DangercordResponse;
    } catch (exc: any) {
      return exc.data ? (exc.data as DangercordErrorResponse) : exc;
    }
  }

  async getUser(userId: string) {
    if (!userId) throw new Error("userId is required!");
    return (
      await axios.get(`https://dangercord.com/api/v1/user/${userId}`, {
        headers: this.headers,
      })
    ).data as DangercordResponse;
  }

  async reportUser(userId: string, data: DangercordReportUserParams) {
    if (!data || !userId) throw new Error("data and userId is required!");
    return (
      await axios.post(
        `https://dangercord.com/api/v1/user/${userId}/report`,
        data,
        {
          headers: this.headers,
        }
      )
    ).data as DangercordResponse;
  }
}
