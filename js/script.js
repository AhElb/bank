   //  Header fixed
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass(" slideInDown "), 3000;

            $('.navbar-default .navbar-nav>li>a ').addClass(" change "), 3000;
        } else {
            $('.navbar').removeClass(" slideInDown "), 3000;
            $('.navbar-default .navbar-nav>li>a ').removeClass(" change "), 3000;

        }
    });


    $(document).ready(function() {
  $(window).on("load scroll", function() {
    var parallaxElement = $(".iphone"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.3 - elementHeight * 0.3,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.2 + "px, 0)"
        });
      }
    });
  });




});
$(document).ready(function() {
 
$("#owl-example").owlCarousel({
 
    // Most important owl features
    items : 1,
    itemsCustom : false,

     autoPlay : true,
    navigation : false,
     rewindNav : false,
         pagination : false,
          responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    loop:Infinity, 
   animateOut: 'slideOutDown',

     lazyEffect : "fade",


    }); 
});
