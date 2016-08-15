(function () {
  'use strict';

  window.appName = '<%= appname %>';

  //new WOW().init();
  var s = skrollr.init({
    forceHeight: false,
    mobileCheck: function() {
      //hack - forces mobile version to be off
      return false;
    }
  });


})();
