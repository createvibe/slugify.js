# slugify.js
Javascript slugify routine, handling diacritics / accents, with an English - Diacritic map.

# Examples

```javascript
Slugify('Iñtërnâtiônàlizætiøn');    // internationalizaetion
  
Slugify('C\'est déjà l\'été');      // cest-deja-lete
  
Slugify('Україна');                 // y
  
Slugify('東西放在這裡');              // 東
  
Slugify('kääntää jotain minulle');  // kaantaa-jotain-minulle
```
