function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// $(window).scroll(function() {
//   $('.progress-bar').each(function() {
//     if (isScrolledIntoView(this) === true) {
//       var bar_value = $(this).attr('aria-valuenow') + '%';
//       $(this).animate({
//         width: bar_value
//       }, {
//         duration: 2000,
//         easing: 'easeOutCirc'
//       });
//     } else if (isScrolledIntoView(this) === false) {
//       $(this).removeClass('in-view')
//     }
//   });
//
// });

// var $progress = $('.progress');
// var $progressBar = $('.progress-bar');
$(function() {
  $('.progress-bar').each(function() {
    var bar_value = $(this).attr('aria-valuenow') + '%';
    $(this).animate({
      width: bar_value
    }, {
      duration: 500,
      easing: 'easeOutCirc'
    });
  });
});
//
// $(window).scroll(function () {
//     $('.progress-bar').each(function () {
//         if (isScrolledIntoView(this) === true) {
//           if(!shown){
//        alert('Your book is overdue');
//       }
//        shown = true;
//   }
//   else{
//    shown = false
//         }
//     });
//
// });
//
// $(window).scroll(function() {
//   $('.progress-bar').each(function() {
//       if (isScrolledIntoView(this) === true) {
//         var bar_value = $(this).attr('aria-valuenow') + '%';
//         $(this).animate({
//           width: bar_value
//         }, {
//           duration: 1000,
//           easTing: 'easeOutQuad'
//         });
//       });
// else if (isScrolledIntoView(this) === false) {
//   var min_value = 0;
//   $(this).animate({
//     width: min_value
//   }, {
//     duration: 500,
//     easTing: 'easeOutQuad'
//   });
//   $(this).removeClass('in-view')
// }
// };
// });





(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

  });

})(jQuery);
