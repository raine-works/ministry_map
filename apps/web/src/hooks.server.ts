import type { Handle } from '@sveltejs/kit'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter as router, createContext, type AppRouter } from '@mm/api'

export const handle: Handle = async ({ event, resolve }) => {
	if (
		event.url.pathname.startsWith('/api/trpc/') &&
		(event.request.method === 'GET' || event.request.method === 'POST')
	) {
		return await fetchRequestHandler<AppRouter>({
			endpoint: '/api/trpc',
			req: event.request,
			createContext,
			router
		})
	}

	return await resolve(event)
}
