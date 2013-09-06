$(document).ready(function() {

  if($(document).width() < 640) {
    $(document).foundation('clearing','off');
    $('a.thumbnail').on('click', function(e) {
      e.preventDefault();
    });
  }
  else {
    var fileArray = new Array("images/web/baarzo.png","images/web/verdadera.png","images/web/la_pluma.png","images/web/mvwebdev.png","images/web/mvfbla.png","images/web/realvu.PNG","images/web/teeno.png","images/web/ae.png","images/web/mvnhs.png","images/web/mvmatshack.png","images/graphics/stephen_skeel.png","images/graphics/ddp.png","images/graphics/projects.png","images/graphics/mvwebdev_graphics.png","images/graphics/mvfbla_graphics.png","images/graphics/nikitas.png","images/graphics/brochures.png","images/graphics/it_graphic.png");
    var imageArray = new Array();

    for(var i=0; i < fileArray.length; i++) {
      imageArray[i] = new Image();
      imageArray[i].src = fileArray[i];
    }
  }

  $('.scrollTo').on('click', function(e) {
    e.preventDefault();
    Foundation.lib_methods.scrollTo($(window), $($(e.currentTarget).attr('href')).offset().top, 200);
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