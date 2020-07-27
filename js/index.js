(function() {
    //Con el EFI aseguramos que el código se ejecute una sola vez.
    "use strict";
    //Al cargar la pagina
    barraF();
})
//Menu fijo
$(window).scroll(function() {
    barraF();
});
//Menu Responsive
$('.menu-movil').on('click', function() {
    $('.navegacion-principal').slideToggle(); //slideToggle pone hide() y show() con animación
    //console.log("Diste click")
});

function barraF() {
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight() /* innerHeight() altura con padding y margin*/

    if (scroll > windowHeight) {
        $('.barra').addClass('fixed');
        $('body').css({ 'margin-top': barraAltura + 'px' });
    } else {
        $('.barra').removeClass('fixed');
        $('body').css({ 'margin-top': '0px' });
    }
}

jQuery(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});

 var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

 if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }

/*carrusel*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}