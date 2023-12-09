import { router } from './trpc'
export { createContext } from './context'
import { useTestRoute } from './routes/text.route'

export const appRouter = router({
	test: useTestRoute
})

export type AppRouter = typeof appRouter
