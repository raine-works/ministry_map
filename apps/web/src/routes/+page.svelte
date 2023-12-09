<script lang="ts">
	import { trpc } from '$lib/trpc'
	import { onMount } from 'svelte'
	import { writable } from 'svelte/store'

	const greeting = writable<string>()
	const btn = writable<string>('Click Me')
	onMount(async () => {
		trpc.test.runTest.query().then((data) => {
			greeting.set(data)
		})
	})
</script>

<div>
	<p>{$greeting}</p>
	<button
		on:click={async () => {
			btn.set(await trpc.test.testOnClick.query())
		}}>{$btn}</button
	>
</div>
