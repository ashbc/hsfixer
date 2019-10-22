// util
const hasUpper = function doesStringHaveUpperCaseLetter(st) {
	return /[A-Z]/.test(st);
};

// higher-order function that changes one word to the next, preserving case
// eg preserveCase('result')('FoObAr') -> 'ReSuLt'
const preserveCase = (replace) => (portion, _) => (
	portion.text.split('')
		.map((letter, i) => {
			if (replace[i] === undefined) return '';
			return (hasUpper(letter)
				? replace[i].toUpperCase()
				: replace[i].toLowerCase()
			);
		})
		.join('')
);

// eslint-disable-next-line no-unused-vars
const replacements = [
	{
		find: /john/i,
		replace: preserveCase('june'),
	},
	{
		find: /(?:r[3e]t[4a]rd)(?!ant)/i,
		replace: preserveCase('r****d'),
	},
];
