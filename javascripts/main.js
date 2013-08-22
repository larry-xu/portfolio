$(document).ready(function() {

  if($(document).width() < 640) {
    $(document).foundation('clearing','off');
    $('a.thumbnail').addClass('disabled');
    $('a.thumbnail').on('click', function(e) {
      e.preventDefault();
    });
  }

  $('.scrollTo').on('click', function(e) {
    e.preventDefault();
    Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 500);
  });
});