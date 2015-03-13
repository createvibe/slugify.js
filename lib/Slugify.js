/**
 * The Slugify class
 * @param {Diacritics} diacritics The diacritics object to use
 * @constructor
 */
function Slugify(diacritics) {
	this.diacritics = diacritics;
}

/**
 * The Diacritics class to use
 * @type {Diacritics}
 */
Slugify.prototype.diacritics = null;

/**
 * Slugify a string
 * @param {String} content The content you want to run the filter on
 * @param {Array<{Object}>|undefined} locale To use your own diacritics locale (map)
 * @return {String}
 */
Slugify.prototype.parse = function(content, locale) {
	return this.diacritics.parse(content, locale)
		.toLowerCase()
		.replace(/[\s_]+/g, '-')				// Replace spaces and underscores with -
		.replace(/[^\w\-]+/g, '-') 				// replace all non word characters
		.replace(/\-{2,}/g, '-') 				// Replace multiple - with single -
		.replace(/^\-*|\-*$/g, '');				// Trim -
};

if (module && module.exports) {
	module.exports = Slugify;
}
