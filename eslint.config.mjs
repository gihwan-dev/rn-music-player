import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	{
		ignores: [
			'**/node_modules/**/*',
			'**/.expo/**/*',
			'**/.next/**/*',
			'**/__generated__/**/*',
			'**/build/**/*',
			'react-native-lab/react-native/**/*',
			'docs/react-native-website/**/*',
			'**/android/**/*',
			'**/assets/**/*',
			'**/bin/**/*',
			'**/fastlane/**/*',
			'**/ios/**/*',
			'**/kotlin/providers/**/*',
			'**/vendored/**/*',
			'docs/public/static/**/*',
		],
	},
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
		),
	),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			react: fixupPluginRules(react),
			'react-hooks': fixupPluginRules(reactHooks),
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		languageOptions: {
			globals: {
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 12,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
]
