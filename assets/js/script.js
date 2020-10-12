$(document).ready(function(){
 

      // open menu
      $(".menu-icon i ").click(function () {
        $(".nav-section .nav-ul").addClass("left-0");
        $("body").addClass("body-over-lay");
        $(".over-lay").show();
    });

    // close menu
    $(".close-menu i, .over-lay").click(function () {
        $(".nav-section .nav-ul").removeClass("left-0");
        $("body").removeClass("body-over-lay");
        $(".over-lay").hide();
    });





    // blog slider
    $(".blog-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows:false,
        adaptiveHeight: true,
        centerMode:true,
        centerPadding: '0px',
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode:false,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    centerMode:false,
                    slidesToScroll: 1,
                },
            }
        ],
    });


});