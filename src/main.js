'use strict';

require('./sass/app.scss');
require('./img/pylons-60x60.png');
require('./img/pylons-16x16.png');
require('./img/linode.png');
require('./img/pyramid-green.png');
require('./img/logo-talk-python-training-128x128.png');
require('./img/logo-jetbrains.png');
require('./img/logo-linode.png');

// artwork
require('./img/pylons-project-logo.svg');
require('./img/pylons-project-logo.png');
require('./img/pylons-project-logo.pdf');

require('./img/pylons-project-logo-white.svg');
require('./img/pylons-project-logo-white.png');
require('./img/pylons-project-logo-white.pdf');

require('./img/pylons-project-logo-black.svg');
require('./img/pylons-project-logo-black.png');
require('./img/pylons-project-logo-black.pdf');

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
