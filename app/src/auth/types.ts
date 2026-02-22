export type AuthType = "public" | "internal" | "user" | "apiKey"

export interface UserData {
	userId: string
	organizationId: string
}

export type AuthContext =
	| { type: "public" }
	| { type: "internal"; service: string; data: UserData; internalToken: string }
	| { type: "user"; data: UserData }
	| { type: "apiKey"; keyId: string; data: UserData }
