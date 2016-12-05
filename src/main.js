'use strict';

require('./sass/app.scss');
require('./img/pylons-60x60.png');
require('./img/pylons-16x16.png');
require('./img/linode.png');
require('./img/pyramid-green.png');

var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

if ($('.home').length){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 25) {
      $('#nav').removeClass('index-transparent');
    }
    else {
      $('#nav').addClass('index-transparent');
    }
  });
}
