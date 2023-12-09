import { router, publicProcedure, TRPCError } from '../trpc'
import { z } from 'zod'

export const useTestRoute = router({
	runTest: publicProcedure.query(async ({ ctx }) => {
		return 'Hello World'
	}),

	testOnClick: publicProcedure.query(async () => {
		await Bun.sleep(5000)
		return 'You Clicked Me'
	})
})
