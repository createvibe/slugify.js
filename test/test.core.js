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

	it('should convert to lowercase', function(done) {

		Slugify.parse('ABCDEF').should.equal('abcdef');
		Slugify.parse('nMoPqRs').should.equal('nmopqrs');

		done();

	});

	it('should strip spaces and hyphens from ends of string', function(done) {

		Slugify.parse(' (!* /.?> test !').should.equal('test');
		Slugify.parse('   (!* /.?> test with !  words   ').should.equal('test-with-words');
		Slugify.parse('                                 ').should.equal('');
		Slugify.parse('  %^&*!@#$$(*&^      %^&*+_)(&Y (* &^&*()    )(^&*()(*&^&*(    ').should.equal('y');

		done();

	});

	it('should strip single and double quotes', function(done) {

		Slugify.parse('’"\'"').should.equal('');

		done();

	});

	it('should strip diacritics', function(done) {

		Slugify.parse('Iñtërnâtiônàlizætiøn').should.equal('internationalizaetion');
		Slugify.parse('C’est Déjà L’été').should.equal('cest-deja-lete');
		Slugify.parse('C\'est déjà l\'été').should.equal('cest-deja-lete');
		Slugify.parse('kääntää jotain minulle').should.equal('kaantaa-jotain-minulle');

		done();

	});

});