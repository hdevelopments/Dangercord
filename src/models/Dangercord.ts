export default interface DangercordResponse {
  id: string;
  username: string;
  avatar?: string;
  discriminator: string;
  reports: number;
  last_reported?: number;
  badges: DangerCordBadges;
  votes: { upvotes: number; downvotes: number };
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

export enum DangercordReportCategories {
    Other,
    Advertising,
    Spamming,
    Raiding,
    Harassing
}

export interface DangercordReportUserParams {
    author?: string,
    category: DangercordReportCategories,
    reason: string
}
export interface DangercordErrorResponse {
    error: boolean,
    code: number,
    message: string
}
