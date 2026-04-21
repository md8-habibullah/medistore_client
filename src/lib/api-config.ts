const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || "https://medi-server.habibullah.dev";
export const API_BASE_URL = rawApiUrl.replace(/^ttps:\/\//, 'https://');
