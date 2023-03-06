import { AxiosHeaders } from "axios";
import DangercordResponse, { DangercordReportUserParams } from "./models/Dangercord";
export default class Dangercord {
    private apiToken;
    private headers?;
    constructor(apiToken: string, headers?: AxiosHeaders);
    getCurrentUser(): Promise<any>;
    getUser(userId: string): Promise<DangercordResponse>;
    reportUser(userId: string, data: DangercordReportUserParams): Promise<DangercordResponse>;
}
