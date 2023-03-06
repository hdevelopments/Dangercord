import { AxiosHeaders } from "axios";
import { DangercordReportUserParams } from "./models/Dangercord";
export default class Dangercord {
    private apiToken;
    private headers?;
    constructor(apiToken: string, headers?: AxiosHeaders);
    getCurrentUser(): Promise<any>;
    getUser(userId: string): Promise<any>;
    reportUser(userId: string, data: DangercordReportUserParams): Promise<any>;
}
