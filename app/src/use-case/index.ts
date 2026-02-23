export class Auth<T> {
	data: T
}

export interface UseCase<P = void, R = void> {
	execute(params?: P): Promise<R>
}

export interface AuthenticatedUseCase<A = unknown, P = void, R = void> {
	execute(auth: Auth<A>, params?: P): Promise<R>
}