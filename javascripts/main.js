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
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.post('email.php', { name: name, email: email, message: message }, function(data) {
      var jsonData = JSON.parse(data);
      if(jsonData.sent)
        $('form').append('<div class="alert-box success">Mail sent successfully.</div>');
    });
  });
});