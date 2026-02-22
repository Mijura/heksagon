import { AuthenticatedAuthContext } from "../auth/types"

export interface PublicUseCase<P, R> {
	execute(params: P): Promise<R>
}

export interface AuthenticatedUseCase<P, R> {
	execute(params: P, authContext: AuthenticatedAuthContext): Promise<R>
}
