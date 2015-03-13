/**
 * The Diacritics Class
 * @param {Array<{Object}>} locale The diacritics local (map) you want to use
 * @constructor
 */
function Diacritics(locale) {
	this.locale = locale;
}

/**
 * The diacritics locale (map) provided on construct
 * @type {Array<{Object}>}
 */
Diacritics.prototype.locale = null;

/**
 * Replace accents/diacritics in strings, according to the diacritics map
 * @param {String} str The string to parse
 * @param {Array<{Object}>|undefined} locale To use your own diacritics map
 * @returns {String}
 */
Diacritics.prototype.parse = function(str, locale) {

	// make sure we have a locale
	if (!locale) {
		locale = this.locale;
	}

	// initialize
	var i,
		len = locale.length;

	// make sure we have a string
	str = str + '';

	// don't do anything if we don't have to
	if (str.length === 0) {
		return str;
	}

	// replace characters based on our locale (map)
	for (i = 0; i < len; i++) {
		str = str.replace(locale[i].letters, locale[i].base);
	}

	return str;

};

if (module && module.exports) {
	module.exports = Diacritics;
}