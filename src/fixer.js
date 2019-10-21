console.log('Ruining Homestuck...');
console.log(`Found ${Object.keys(replacements).length} replacements.`);
const textElement = document.querySelector('body');

function doit() {
	replacements.forEach((word) => {
		findAndReplaceDOMText(textElement, {
			find: word.find,
			replace: word.replace,
			preset: 'prose',
		})
	});
}
doit();
setTimeout(doit, 1000);
setTimeout(doit, 2000);
setTimeout(doit, 5000);
