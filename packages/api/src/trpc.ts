import type { Context } from './context'
import { initTRPC, TRPCError } from '@trpc/server'
import { ZodError } from 'zod'

const t = initTRPC.context<Context>().create({
	errorFormatter({ shape, error }) {
		console.log(error)
		return {
			...shape,
			data: {
				...shape.data,
				zodError:
					error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
						? error.cause.flatten()
						: null
			}
		}
	}
})

export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export { TRPCError }
