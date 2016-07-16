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