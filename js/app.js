/**
 * The Prototyper application, no need to modify.
 */

(function ($) {
  var $view = $('#view');

  // Request and render a template
  function render(view) {
    var template = window.location.hash.replace(/[#\/]+/,'') || 'index';

    $.ajax({
      url: 'templates/' + template + '.html'
    }).done(function (data) {
      view.html(data);

      // Signal template loaded
      $(document).trigger('XHRContentLoaded');
    });
  }

  // Include additional templates
  function include() {
    var $include = $('[data-include]');

    $include.each(function () {
      var path = $(this).attr('data-include');

      $.ajax({
        context: this,
        url: path
      }).done(function (data) {
        $(this).html(data);
      });
    });
  }

  // Initial page render
  render($view);

  // Rerender on page change
  $(window).on('hashchange', function() {
    render($view);
  });

  $(document).on('XHRContentLoaded', function () {
    include();
  });
})(jQuery);
