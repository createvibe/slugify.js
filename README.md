# slugify.js
Javascript slugify routine, handling diacritics / accents.  

Includes an English - Diacritic map.  

Extensible, so you can build your own diacritic map (locale).

# Examples

### Using the English locale
```javascript
Slugify.parse('Iñtërnâtiônàlizætiøn');    // internationalizaetion
  
Slugify.parse('C’est Déjà L’été');        // cest-deja-lete
  
Slugify.parse('Україна');                 // y
  
Slugify.parse('東西放在這裡');              // 東

Slugify.parse('kääntää jotain minulle');  // kaantaa-jotain-minulle
```

### Using NodeJS
```javascript
var Slugify = require('slugifyjs').fromLocale('en');

Slugify.parse('slugify this for me please');		// slugify-this-for-me-please
```

# NPM
Install with npm: `npm install slugifyjs`

# Bower
Install with bower: `bower install slugifyjs`

# Contributing
Use `grunt dev` to test your changes with a version that is not uglified.

Use `grunt` to compress an uglified file after you make changes.

*Please do not submit a PR with a compiled file for dev.*

# Tests
Run `npm test` to execute mocha tests.