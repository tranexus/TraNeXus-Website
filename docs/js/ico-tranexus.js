// Preloader
$(window).on('load', function() {
  $('.preloader').delay(1800).fadeOut('slow', function() {
    $(this).remove();
  });
});

// Wow
var Wow = function() {
  'use strict';

  // Handle Wow
  var handleWow = function() {
    var wow = new WOW({
      mobile: false
    });
    wow.init();
  }

  return {
    init: function() {
      handleWow(); // initial setup for Wow
    }
  }
}();

$(document).ready(function() {
  Wow.init();
});
