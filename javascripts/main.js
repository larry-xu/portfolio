$(document).ready(function() {

  if($(document).width() < 640) {
    $(document).foundation('clearing','off');
    $('a.thumbnail').on('click', function(e) {
      e.preventDefault();
    });
  }

  $('.scrollTo').on('click', function(e) {
    e.preventDefault();
    Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 300);
  });

  $('form').on('submit', function() {
    return false;
  });

  $('form').on('valid', function() {
    console.log('valid');
  });
});