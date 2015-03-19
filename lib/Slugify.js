/**
 * The Slugify class
 * @param {Diacritics|undefined} diacritics Optional diacritics object to use
 * @constructor
 */
function Slugify(diacritics) {
	if (diacritics) {
		this.diacritics = diacritics;
	}
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
	if (this.diacritics) {
		content = this.diacritics.parse(content, locale);
	} else {
		content = content + '';
	}
	return content.toLowerCase()
		.replace(/[\s_]+/g, '-')				// replace spaces and underscores with -
		.replace(/[’'"]+/g, '')					// remove quotes
		.replace(/[^\w\-]+/g, '-') 				// replace all non word characters
		.replace(/\-{2,}/g, '-') 				// replace multiple - with single -
		.replace(/^\-*|\-*$/g, '');				// trim -
};

if (module && module.exports) {
	module.exports = Slugify;
}
