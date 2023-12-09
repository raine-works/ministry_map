import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import type { inferAsyncReturnType } from '@trpc/server'

export const createContext = async ({ req, resHeaders }: FetchCreateContextFnOptions) => {
	return {
		req,
		resHeaders
	}
}

export type Context = inferAsyncReturnType<typeof createContext>
