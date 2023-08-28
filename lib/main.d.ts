import { AxiosHeaders } from "axios";
import { DangercordResponse, DangercordReportUserParams } from "./models/Dangercord.js";
export default class Dangercord {
    private apiToken;
    private headers?;
    constructor(apiToken: string, headers?: AxiosHeaders);
    getCurrentUser(): Promise<any>;
    getUser(userId: string): Promise<DangercordResponse>;
    reportUser(userId: string, data: DangercordReportUserParams): Promise<DangercordResponse>;
}
//# sourceMappingURL=main.d.ts.map