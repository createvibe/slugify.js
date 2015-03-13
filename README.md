# slugify.js
Javascript slugify routine, handling diacritics / accents, with an English - Diacritic map.

*Note: This library is still being developed*

# Examples

### Using the English locale
```javascript
Slugify.parse('Iñtërnâtiônàlizætiøn');    // internationalizaetion
  
Slugify.parse('C\'est déjà l\'été');      // cest-deja-lete
  
Slugify.parse('Україна');                 // y
  
Slugify.parse('東西放在這裡');              // 東

Slugify.parse('kääntää jotain minulle');  // kaantaa-jotain-minulle
```

### Using NodeJS
```javascript
var Slugify = require('slugify').fromLocale('en');

Slugify.parse('slugify this for me please');		// slugify-this-for-me-please
```