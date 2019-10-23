// replacements defined in fixer.js
// findAndReplaceDOMText from the library
/* global replacements findAndReplaceDOMText */

// eslint-disable-next-line no-console
console.log('Ruining Homestuck...');
const textElement = document.querySelector('body');

function doit() {
	replacements.forEach((word) => {
		findAndReplaceDOMText(textElement, {
			preset: 'prose',
			...word,
		});
	});
}
doit();
setTimeout(doit, 1000);
setTimeout(doit, 2000);
setTimeout(doit, 5000);
