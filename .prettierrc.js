/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	printWidth: 90,
	proseWrap: 'always',
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	tabWidth: 4,
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte'
			}
		}
	]
}
