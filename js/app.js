/**
 * The Prototyper application, no need to modify.
 */

(function ($) {
  var $view = $('#view');

  function render(view) {
    var template = window.location.hash.replace(/[#\/]+/,'') || 'index';

    $.ajax('templates/' + template + '.html').done(function(data) {
      view.html(data);

      // Signal template loaded
      $(document).trigger('XHRContentLoaded');
    });
  }

  // Initial page render
  render($view);

  $(window).on('hashchange', function() {
    render($view);
  });
})(jQuery);
