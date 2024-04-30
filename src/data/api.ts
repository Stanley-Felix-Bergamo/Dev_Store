import { env } from "@/env";

export function api(path: string, init?: Request) {
    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
    const url = new URL(path, baseUrl)

    return fetch(url, init)
}