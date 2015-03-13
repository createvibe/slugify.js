module.exports = {

	Slugify: require('./lib/Slugify') ,

	Diacritics: require('./lib/diacritics/Diacritics') ,

	fromLocale: function(locale) {
		return new this.Slugify(new this.Diacritics(this.requireLocale(locale)));
	} ,

	requireLocale: function(locale) {
		return require('./lib/diacritics/locale/' + locale + '.js');
	}

};