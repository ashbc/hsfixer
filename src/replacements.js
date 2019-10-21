// Object mapping strings/regexes to strings/functions.
const defaultReplacement = '****';

// util
const hasUpper = function doesStringHaveUpperCaseLetter(st) {
	return /[A-Z]/.test(st);
}

const preserveCase = (replace) => (portion, _) => (
	portion.text.split('')
		.map((letter, i) => (
			replace[i]
				? (hasUpper(letter) ? replace[i].toUpperCase() : replace[i].toLowerCase())
				: ''
		))
		.join('')
)
const replacements = [
	{
		find: /john/i,
		replace: preserveCase('june'),
	},
	{
		find: /(?:r[3e]t[4a]rd)(?!ant)/i,
		replace: preserveCase('r@@@@d'),
	},
];
