export type AuthType = "internal-token" | "bearer-token" | "api-key"

export class Auth<T> {
	data: T
	type: AuthType
}

export interface UseCase<P, R> {
	execute(params: P): Promise<R>
}

export interface AuthenticatedUseCase<P, R, A = unknown> {
	execute(params: P, auth: Auth<A>): Promise<R>
}
