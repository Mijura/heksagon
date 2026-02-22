import { AuthContext } from "../auth/types"

export interface PublicUseCase<P, R> {
	execute(params: P): Promise<R>
}

export type AuthenticatedAuthContext = Exclude<AuthContext, { type: "public" }>

export interface AuthenticatedUseCase<P, R> {
	execute(params: P, authContext: AuthenticatedAuthContext): Promise<R>
}
