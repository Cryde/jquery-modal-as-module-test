# Example

To run this exemple : 

`npm install`
`npm run build:dev`
It will start brunch as a watcher

`npm run build:prod`
Will minified js and css into public/app.js and public/app.css


Pay attention that in the `package.json` I use my own repo.
It's only for test purpose.

Check the `app/app.js` 
With the little patch added to jquery-modal you can now use it as a module.

```
var $ = require('jquery');
require('jquery-modal');

$(function () {

  // DUMMY TEST
  $('#learn-more').click(function(e){
    e.preventDefault();

    $.get('ajax.html', function(html) {
      $(html).appendTo('body').modal();
    });
  });
});
```

Like that you won't add jQuery to the global scope