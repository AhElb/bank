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

    $(".over").click(function(){
$(this).next('.inner_links').toggleClass("show_dawn") ;
$(this).children(".point").toggleClass("rotate");


    });


    $("#togglePassword").click(function(){






// Check the checkbox state
  if($("#password_input").hasClass("pass")){

   // Changing type attribute
$("#password_input").attr('type','text') ;
$("#password_input").removeClass("pass");
$("#password_input").addClass("showt");
    $("#togglePassword").removeClass('far fa-eye');
        $("#togglePassword").addClass('fas fa-eye-slash');




   
  }
  else if ($("#password_input").hasClass("showt")) {



$("#password_input").attr('type','password') ;
$("#password_input").addClass("pass");


$("#password_input").removeClass("showt");

$("#togglePassword").removeClass('fas fa-eye-slash');
        $("#togglePassword").addClass('far fa-eye ');


   
  }

           

    });


        $(".trans_btn").click(function(){



$(".Transactions").css({right: 0});
$(".all").css({right: 3000+"px" });

$(this).addClass("linke_acctive");
$('.acc_btn').removeClass("linke_acctive")


        });

          $(".menu_bar").click(function(){



$(".link").toggleClass("hightt");


        });

});
