import { Auth, AuthType } from "@heksagon/app"
import { AuthError } from "./error"

function h(headers: any, name: string): string | undefined {
	const v = headers?.[name] ?? headers?.[name.toLowerCase()]
	return Array.isArray(v) ? v[0] : v
}

export function extractAuth(headers: any): Auth<unknown> {
	const type = h(headers, "x-auth-type") as AuthType | undefined
	if (!type) throw new AuthError("Missing x-auth-type")

	const dataString = h(headers, "x-data")

	if (!dataString) throw new AuthError("Missing x-data")
	const data = JSON.parse(dataString)

	if (type === "internal-token") {
		const auth: Auth<any> = {
			type: "internal-token",
			data: data,
		}

		return auth
	}

	if (type === "bearer-token") {
		const auth: Auth<any> = {
			type: "bearer-token",
			data: data,
		}

		return auth
	}

	if (type === "api-key") {
		const auth: Auth<any> = {
			type: "api-key",
			data: data,
		}

		return auth
	}

	throw new AuthError("Invalid x-auth-type")
}

export function authToHeaders(auth: Auth<any>): Record<string, string> {
	const headers: Record<string, string> = {
		"x-auth-type": auth.type,
	}

	headers["x-data"] = JSON.stringify(auth.data)

	return headers
}
