import { Auth } from "@heksagon/app"
import { AuthError } from "./error"

function h(headers: any, name: string): string | undefined {
	const v = headers?.[name] ?? headers?.[name.toLowerCase()]
	return Array.isArray(v) ? v[0] : v
}

export function extractAuthData(headers: any): Auth<any> {

	const dataString = h(headers, "x-auth-data") || h(headers, "X-Auth-Data")

	if (!dataString) throw new AuthError("Missing X-Auth-Data")
	const data = JSON.parse(dataString)

	const auth: Auth<any> = {
		data: data,
	}

	return auth
}

export function authDataHeaders(auth: Auth<unknown>): Record<string, string> {
	const headers: Record<string, string> = {}

	headers["x-auth-data"] = JSON.stringify(auth.data)

	return headers
}

export function bearerTokenHeaders(bearerToken: string): Record<string, string> {
	const headers: Record<string, string> = {}

	headers["Authorization"] = `Bearer ${bearerToken}`

	return headers
}

export function apiKeyHeaders(apiKey: string): Record<string, string> {
	const headers: Record<string, string> = {}

	headers["x-api-key"] = apiKey

	return headers
}

export function internalTokenHeaders(internalToken: string, auth: Auth<unknown>): Record<string, string> {
	let headers: Record<string, string> = {}

	headers["x-internal-token"] = internalToken
	headers = { ...headers, ...authDataHeaders(auth) }

	return headers
}

