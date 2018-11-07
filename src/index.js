const blankLinePlugin = (md, options) => {
	const blankLineTokenizer = (state, silent) => {
	  const {
	  	pos: start,
	  	posMax: max,
	  	src
	  } = state
		const isLastChar = start === max - 1
		const nextIsNewLine = isLastChar ? false : src.charCodeAt(start + 1) === 0x0A/* \n */

	  if (src.charCodeAt(start) !== 0x7E/* ~ */) { return false }
	  if (start !== 0 && src.charCodeAt(start - 1) !== 0x0A/* \n */) { return false }
	  if (!nextIsNewLine && !isLastChar) { return false }
	  if (silent) { return false }

		const token = state.push('blank_line_openclose', 'br', 0)

	  state.pos += nextIsNewLine ? 2 : 1
	  return true
	}

	/**
	 * Add parsing rules rules
	 */
  md.inline.ruler.push('blank_line', blankLineTokenizer)
}

export default blankLinePlugin
