# slugify.js
Javascript slugify routine, handling diacritics / accents.  

Includes an English - Diacritic map.  

Extensible, so you can build your own diacritic map (locale).

*Note: This library is still being developed*

# Examples

### Using the English locale
```javascript
Slugify.parse('Iñtërnâtiônàlizætiøn');    // internationalizaetion
  
Slugify.parse('C\'est déjà l\'été');      // c-est-deja-l-ete
  
Slugify.parse('Україна');                 // y
  
Slugify.parse('東西放在這裡');              // 東

Slugify.parse('kääntää jotain minulle');  // kaantaa-jotain-minulle
```

### Using NodeJS
```javascript
var Slugify = require('slugifyjs').fromLocale('en');

Slugify.parse('slugify this for me please');		// slugify-this-for-me-please
```