import { AuthError } from "./error"
import type { AuthContext, AuthenticatedAuthContext } from "./types"

export function requireAuthenticated(auth: AuthContext): AuthenticatedAuthContext {
	if (auth.type === "public") throw new AuthError("Public access not allowed")
	return auth
}

export function requireOrganizationId(auth: AuthContext): string {
	const a = requireAuthenticated(auth)
	return a.data.organizationId
}

export function requireUserId(auth: AuthContext): string {
	const a = requireAuthenticated(auth)
	return a.data.userId
}
