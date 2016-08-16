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
//   $('.js--scroll-to-plans').click(function() {
//       console.log("clicked");
//     $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
//   });
// });

$(".js--scroll-to-plans").click(function() {
  console.log("clicked");
    $('html, body').animate({
        scrollTop: $(".js--section-plans").offset().top
    }, 2000);
});
});
