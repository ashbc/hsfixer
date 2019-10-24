// util
const hasUpper = function doesStringHaveUpperCaseLetter(st) {
	return /[A-Z]/.test(st);
};

// higher-order function that changes one word to the next, preserving case
// eg preserveCase('result')('FoObAr') -> 'ReSuLt'
const preserveCase = (replace) => (portion) => (
	replace.split('')
		.map((letter, i) => {
			const find = portion.text;
			return (hasUpper(find.charAt(i))
				? letter.toUpperCase()
				: letter.toLowerCase()
			);
		}).join('')
);

// this var gets used in fixer.js
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
	{
		// hs 386
		find: 'white guy who is a',
		replace: preserveCase(''),
	},
	{
		// jb 87, ps 801, hs 735
		find: /slit (your|my) wrists/,
		// I figure this preserves the joke but removes SH reference
		replace: 'cut someone',
	},
	{
		find: 'flog your carapace',
		replace: 'flog their carapace',
	},
	// TODO: hs 1643 flog joke
	// TODO: hs ??? snooty dowagers joke
];
