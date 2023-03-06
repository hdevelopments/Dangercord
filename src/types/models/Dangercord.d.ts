export default interface DangercordResponse {
    id: string;
    username: string;
    avatar?: string;
    discriminator: string;
    reports: number;
    last_reported?: number;
    badges: DangerCordBadges;
    votes: {
        upvotes: number;
        downvotes: number;
    };
    flags: DangerCordFlags;
}
export interface DangerCordFlags {
    spammer: boolean;
}
export interface DangerCordBadges {
    blacklisted?: boolean;
    whitelisted?: boolean;
    admin?: boolean;
    raid_bot?: boolean;
    scam_bot?: boolean;
}
export declare enum DangercordReportCategories {
    Other = 0,
    Advertising = 1,
    Spamming = 2,
    Raiding = 3,
    Harassing = 4
}
export interface DangercordReportUserParams {
    author?: string;
    category: DangercordReportCategories;
    reason: string;
}
