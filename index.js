module.exports = {

	Slugify: require('./lib/Slugify') ,

	Diacritics: require('./lib/Diacritics/Diacritics') ,

	fromLocale: function(locale) {
		return new this.Slugify(new this.Diacritics(this.requireLocale(locale)));
	} ,

	requireLocale: function(locale) {
		return require('./lib/Diacritics/locale/' + locale + '.js');
	}

};
