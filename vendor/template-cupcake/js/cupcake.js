$(document).ready(function() {

  // Smooth scrolling with jQuery.
  // Ref. https://stackoverflow.com/a/7717572/3186769
  var $root = $('html, body');
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
  });

  // Filtering for menu items.
  var controls = $('.menu .container');
  var mixer = mixitup(controls);

  // Auto-expand textarea as user types.
  autosize($('.contact textarea'));



});
