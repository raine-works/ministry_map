import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { FetchEsque } from '@trpc/client/dist/internals/types'
import type { AppRouter } from '@mm/api'

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: '/api/trpc',
			fetch(url, opts) {
				return fetch(url, {
					...opts,
					credentials: 'include'
				})
			}
		})
	]
})

export const trpcOnServer = (fetch: FetchEsque) => {
	return createTRPCProxyClient<AppRouter>({
		links: [
			httpBatchLink({
				url: '/api/trpc',
				fetch(url, opts) {
					return fetch(url, {
						...opts,
						credentials: 'include'
					})
				}
			})
		]
	})
}
