var H5P = H5P || {};
var H5PIntegration  = H5PIntegration || {};

/* this code is copied from h5p source and modified */

var handler = function () {
  console.log("button pressed haha yeah");
};

(function ($) {
  $(document).ready(function () {

    $url = "";
    var data = H5PIntegration.contents;
    for (var key in data) {
      $url = data[key].url;
      break;
    }

    $('ul.h5p-actions')
    .append('<li class="h5p-button h5p-noselect h5p-fullscreen" role="button" tabindex="0" title="View in fullscreen">Fullscreen</li>')
    .click(function() {
      window.top.location.href = $url;
    });
  })
})(H5P.jQuery);