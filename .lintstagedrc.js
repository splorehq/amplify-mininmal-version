const path = require('path')

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand],
	'*.{graphql,js,jsx,ts,tsx}': ['eslint'],
	'*.{cjs,css,graphql,html,js,json,jsx,md,scss,ts,tsx,yaml}': ['prettier'],
}
