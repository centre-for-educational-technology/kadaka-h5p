var H5P = H5P || {};
var H5PIntegration  = H5PIntegration || {};

self.t = function(key, vars) {
  return H5P.t(key, vars, 'FullscreenButton');
};

(function ($) {
  $(document).ready(function () {
    if (H5PIntegration) {
      if (window.drupalSettings && window.drupalSettings.h5p_fullscreen_button) {
        H5PIntegration.l10n.FullscreenButton = window.drupalSettings.h5p_fullscreen_button.l10n;
      } else {
        try {
          if (window.top.drupalSettings && window.top.drupalSettings.h5p_fullscreen_button) {
            H5PIntegration.l10n.FullscreenButton = window.top.drupalSettings.h5p_fullscreen_button.l10n;
          }
        } catch(err) {
          // Do nothing
        }
      }
    }

    var url = "";
    var data = H5PIntegration.contents;
    for (var key in data) {
      url = data[key].url;
      break;
    }

    var type =  "fullscreen";

    $('ul.h5p-actions')
    .append('<li class="h5p-button h5p-noselect h5p-' + type + '" role="button" tabindex="0" title="' + self.t(type + 'Description') + '">' + self.t(type) + '</li>')
    .click(function() {
      window.top.location.href = url;
    });
  })
})(H5P.jQuery);