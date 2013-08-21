$(document).ready(function() {
  $('.scrollTo').on('click', function(e) {
    e.preventDefault();
    Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 500);
  });
});