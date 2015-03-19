/**
 * @author Anthony Matarazzo <email@anthonymatarazzo.com>
 */

var should = require('should');

var Slugify = require('./../index.js').fromLocale('en');

describe('Slugify.js Core ->', function() {

	it('should parse a string', function(done) {

		Slugify.parse('Parse This String').should.equal('parse-this-string');

		done();

	});

	it('should not modify a word if it does not have to', function (done) {

		Slugify.parse('test').should.equal('test');

		done();

	});

	it('should strip spaces and hyphens from ends of string', function(done) {

		Slugify.parse(' (!* /.?> test !').should.equal('test');
		Slugify.parse('   (!* /.?> test with !  words   ').should.equal('test-with-words');
		Slugify.parse('                                 ').should.equal('');
		Slugify.parse('    %^&*!@#$$(*&^      %^&*+_)(&Y (* &^&*()    )(^&*()(*&^&*(    ').should.equal('');

		done();

	});

	it('should strip diacritics', function(done) {

		Slugify.parse('Iñtërnâtiônàlizætiøn').should.equal('internationalizaetion');
		Slugify.parse('C\'est déjà l\'été').should.equal('c-est-deja-l-ete');
		Slugify.parse('kääntää jotain minulle').should.equal('kaantaa-jotain-minulle');

		done();

	});

});