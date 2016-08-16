$(document).ready(function() {
  /*STIKCY NAVIGATION*/
  $('.js--section-features').waypoint(function(direction){
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
    }, {
      offset: '60px;'
  });

  /*SCROLL BUTTONS*/
  $('.js--scroll-to-plans').click(function() {
      console.log("clicked");
    $("html,body").animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
  });
  $('.js--scroll-to-start').click(function() {
      console.log("clicked");
    $("html,body").animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

  /*NAVIGATION SCROLL*/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  /*ANIMATE WITH SCROLL*/
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  })
  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  })
  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  })
  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  })


});//end document.ready
