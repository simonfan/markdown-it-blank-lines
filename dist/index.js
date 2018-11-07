'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var blankLinePlugin = function blankLinePlugin(md, options) {
  var blankLineTokenizer = function blankLineTokenizer(state, silent) {
    var start = state.pos,
        max = state.posMax,
        src = state.src;
    var isLastChar = start === max - 1;
    var nextIsNewLine = isLastChar ? false : src.charCodeAt(start + 1) === 0x0A;
    /* \n */

    if (src.charCodeAt(start) !== 0x7E
    /* ~ */
    ) {
        return false;
      }

    if (start !== 0 && src.charCodeAt(start - 1) !== 0x0A
    /* \n */
    ) {
        return false;
      }

    if (!nextIsNewLine && !isLastChar) {
      return false;
    }

    if (silent) {
      return false;
    }

    var token = state.push('blank_line_openclose', 'br', 0);
    state.pos += nextIsNewLine ? 2 : 1;
    return true;
  };
  /**
   * Add parsing rules rules
   */


  md.inline.ruler.push('blank_line', blankLineTokenizer);
};

exports.default = blankLinePlugin;
