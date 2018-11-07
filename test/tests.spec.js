import { readFileSync } from 'fs'
import { join } from 'path'

import markdownIt from 'markdown-it'

import blankLines from '../src'

const fixture = name => {
	return readFileSync(join(__dirname, 'fixtures', name), 'utf8')
}

describe('blank_lines', () => {
	test('snapshot-test', () => {
		const md = markdownIt().use(blankLines)
		const result = md.render(fixture('fixture-1.md'))

		expect(result).toMatchSnapshot()
	})
})
