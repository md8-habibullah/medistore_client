import { createAuthClient } from "better-auth/react";
import { API_BASE_URL } from "./api-config";

// Use relative URL if possible, or construct absolute
const authBaseURL = typeof window !== "undefined" 
  ? `${window.location.origin}${API_BASE_URL.startsWith('/') ? API_BASE_URL : new URL(API_BASE_URL, window.location.origin).pathname}/api/auth`
  : `${API_BASE_URL}/api/auth`;

export const authClient = createAuthClient({
    baseURL: authBaseURL,
});

export const { signIn, signUp, useSession, signOut } = authClient;
