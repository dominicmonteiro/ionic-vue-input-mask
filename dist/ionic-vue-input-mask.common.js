(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VMask: function() { return /* reexport */ directive; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/maskit.js
function maskit(value, mask, masked = true, tokens) {
  value = value || '';
  mask = mask || '';
  var iMask = 0;
  var iValue = 0;
  var output = '';
  while (iMask < mask.length && iValue < value.length) {
    var cMask = mask[iMask];
    var masker = tokens[cMask];
    var cValue = value[iValue];
    if (masker && !masker.escape) {
      if (masker.pattern.test(cValue)) {
        output += masker.transform ? masker.transform(cValue) : cValue;
        iMask++;
      }
      iValue++;
    } else {
      if (masker && masker.escape) {
        iMask++; // take the next mask char and treat it as char
        cMask = mask[iMask];
      }
      if (masked) output += cMask;
      if (cValue === cMask) iValue++; // user typed the same char
      iMask++;
    }
  }

  // fix mask that ends with a char: (#)
  var restOutput = '';
  while (iMask < mask.length && masked) {
    cMask = mask[iMask];
    if (tokens[cMask]) {
      restOutput = '';
      break;
    }
    restOutput += cMask;
    iMask++;
  }
  return output + restOutput;
}
;// CONCATENATED MODULE: ./src/dynamic-mask.js
function dynamicMask(maskit, masks, tokens) {
  masks = masks.sort((a, b) => a.length - b.length);
  return function (value, mask, masked = true) {
    var i = 0;
    while (i < masks.length) {
      var currentMask = masks[i];
      i++;
      var nextMask = masks[i];
      if (!(nextMask && maskit(value, nextMask, true, tokens).length > currentMask.length)) {
        return maskit(value, currentMask, masked, tokens);
      }
    }
    return ''; // empty masks
  };
}
;// CONCATENATED MODULE: ./src/masker.js


// Facade to maskit/dynamicMask when mask is String or Array
/* harmony default export */ function masker(value, mask, masked = true, tokens) {
  return Array.isArray(mask) ? dynamicMask(maskit, mask, tokens)(value, mask, masked, tokens) : maskit(value, mask, masked, tokens);
}
;// CONCATENATED MODULE: ./src/tokens.js
/* harmony default export */ var tokens = ({
  '#': {
    pattern: /\d/
  },
  X: {
    pattern: /[0-9a-zA-Z]/
  },
  S: {
    pattern: /[a-zA-Z]/
  },
  A: {
    pattern: /[a-zA-Z]/,
    transform: v => v.toLocaleUpperCase()
  },
  a: {
    pattern: /[a-zA-Z]/,
    transform: v => v.toLocaleLowerCase()
  },
  '!': {
    escape: true
  }
});

// https://github.com/fernandofleury/vanilla-masker/blob/master/lib/vanilla-masker.js
// DIGIT = "9",
// ALPHA = "A",
// ALPHANUM = "S"

// https://github.com/niksmr/vue-masked-input
// 1 - number
// a - letter
// A - letter, forced to upper case when entered
// * - alphanumeric
// # - alphanumeric, forced to upper case when entered
// + - any character

// https://github.com/probil/v-mask
// #	Number (0-9)
// A	Letter in any case (a-z,A-Z)
// N	Number or letter
// X	Any symbol

// https://github.com/igorescobar/jQuery-Mask-Plugin/blob/master/src/jquery.mask.js#L518
// '0': {pattern: /\d/},
// '9': {pattern: /\d/, optional: true},
// '#': {pattern: /\d/, recursive: true},
// 'A': {pattern: /[a-zA-Z0-9]/},
// 'S': {pattern: /[a-zA-Z]/}

// https://github.com/the-darc/string-mask
// 0	Any numbers
// 9	Any numbers (Optional)
// #	Any numbers (recursive)
// A	Any alphanumeric character
// a	Any alphanumeric character (Optional) Not implemented yet
// S	Any letter
// U	Any letter (All lower case character will be mapped to uppercase)
// L	Any letter (All upper case character will be mapped to lowercase)
// $	Escape character, used to escape any of the special formatting characters.
;// CONCATENATED MODULE: ./src/directive.js



// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#The_old-fashioned_way
function directive_event(name) {
  return new Event(name, {
    bubbles: true,
    cancelable: true
  });
}
/* harmony default export */ function directive(el, binding) {
  var config = binding.value;
  if (Array.isArray(config) || typeof config === 'string') {
    config = {
      mask: config,
      tokens: tokens
    };
  }
  console.log('el', el.querySelectorAll('INPUT'));
  if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
    setTimeout(() => {
      var els = el.querySelectorAll('INPUT');
      if (els.length !== 1) {
        throw new Error("v-mask directive requires 1 input, found " + els.length);
      } else {
        el = els[0];
      }
    }, 50);
  }
  el.oninput = function (evt) {
    if (!evt.isTrusted) return; // avoid infinite loop

    var position = el.selectionEnd;
    // save the character just inserted
    var digit = el.value[position - 1];
    el.value = masker(el.value, config.mask, true, config.tokens);
    // if the digit was changed, increment position until find the digit again
    while (position < el.value.length && el.value.charAt(position - 1) !== digit) {
      position++;
    }
    if (el === document.activeElement) {
      el.setSelectionRange(position, position);
      setTimeout(function () {
        el.setSelectionRange(position, position);
      }, 0);
    }
    el.dispatchEvent(directive_event('input'));
  };
  var newDisplay = masker(el.value, config.mask, true, config.tokens);
  if (newDisplay !== el.value) {
    el.value = newDisplay;
    el.dispatchEvent(directive_event('input'));
  }
}
;// CONCATENATED MODULE: ./src/index.js

const install = app => {
  app.directive('mask', directive);
};
/* harmony default export */ var src_0 = (install);


// Install by default if included from script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ionic-vue-input-mask.common.js.map