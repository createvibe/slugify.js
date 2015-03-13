/**
 * Slugify a string
 * @param {String} content The content you want to run the filter on
 * @param {Array<{Object}>|undefined} diacriticsMap Diacritics map for your language (if not given, English is used)
 * @return {String}
 */
function Slugify(content, diacriticsMap) {
	return Diacritics.removeDiacritics(content.toString(), diacriticsMap)
		.toLowerCase()
		.replace(/[\s_]+/g, '-')				// Replace spaces and underscores with -
		.replace(/^\-*|\-*$|[^\w\-]+/g, '') 	// Trim - and replace all non word characters
		.replace(/\-\-+/g, '-'); 				// Replace multiple - with single -
}
