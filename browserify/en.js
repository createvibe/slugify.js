global.Slugify = (function(Slugify, Diacritics, localeMap) {

	return new Slugify(new Diacritics(localeMap));

}(
	require('../lib/Slugify'), 
	require('../lib/Diacritics/Diacritics'), 
	require('../lib/Diacritics/locale/en.js')
));