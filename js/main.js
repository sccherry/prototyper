/**
 * Add custom scripts here.
 */

(function ($) {

  // Reusable initialization function.
  function init() {
    $(document).foundation();
  }

  $(document).ready(function () {
    init();
  });

  // Reinitialize when template loaded via AJAX.
  // Only needed for Prototyper.
  $(document).on('XHRContentLoaded', function () {
    init();
  });
})(jQuery);
