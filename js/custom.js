$(document).ready(function() {

    $(function() {
        $('#mixed-items').mixItUp();
    });

    new WOW().init();

    // DOM Content Load Event Actions;
    $(window).load(function() {
        $('div#loading').remove();
        $('body').removeClass('loading');
    });

    $('.menu').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 1200,
        top: 0
    });
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});

$(document).ready(function() {
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        navigation: true,
        slideSpeed: 600,
        paginationSpeed: 500,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        navigationText: ["", ""],
        transitionStyle: "fade",
        /*
          transitionStyle : "fade"
          transitionStyle : "backSlide"
          transitionStyle : "goDown"
          transitionStyle : "fadeUp"
        */
    });
    $("#owl-demo-home-slider").owlCarousel({
        navigation: true,
        slideSpeed: 600,
        paginationSpeed: 500,
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        navigationText: ["", ""],
        transitionStyle: "fade",
        /*
          transitionStyle : "fade"
          transitionStyle : "backSlide"
          transitionStyle : "goDown"
          transitionStyle : "fadeUp"
        */
    });
    $("#owl-demo1").owlCarousel({
        navigation: true,
        navigationText: ["", ""],
        autoPlay: 3000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        stopOnHover: true,
        autoHeight: true,
    });
    $("#owl-demo2").owlCarousel({
        navigation: true,
        navigationText: ["", ""],
        autoPlay: 3000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        stopOnHover: true,
        autoHeight: true

    });
    $("#owl-demo3").owlCarousel({
        navigation: true,
        navigationText: ["", ""],
        autoPlay: 3000,
        items: 6,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 1],
        stopOnHover: true,
        autoHeight: true,
    });
    $("#owl-demo4").owlCarousel({
        navigation: true,
        navigationText: ["", ""],
        autoPlay: 3000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        stopOnHover: true,
        autoHeight: true,
    });

});

$(document).ready(function() {
    $(".fancybox").fancybox();
});


$(document).ready(function() {
    $(".menulink").click(function() {
        $(".summenu").toggle();
    })
});

jQuery(document).ready(function() {
    jQuery("#gallery").unitegallery({
        grid_space_between_cols: 5,
        grid_space_between_rows: 5,
        tile_enable_border: false,
        tile_enable_shadow: false,
        grid_padding: 0,
        tile_width: 250,
        tile_height: 200,
        grid_num_rows: 20,
    });
});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $('input[name="inputamount"]').change(function() {
        $('input[name="amount"]').val($(this).val());
    });
});

// When home page load popup this message
$(function() {
    $("#popModal").modal('show');
});


// Side Bar Menu
$(".menu_icon").click(function() {
    $(".menu_icon").toggleClass("active");
});
$(".menu_icon").click(function() {
    $(".sidebar").toggleClass("active");
});
$(".menu_icon").click(function() {
    $(".mobile_menu").toggleClass("active");
});

// Side Bar Dropdown Menu
jQuery('.accordion .open').children('.accordion_content').slideDown();
jQuery('.accordion_headline').on('click', function() {
    var $this = jQuery(this),
        $li = $this.closest('li'),
        $open = $this.closest('.accordion').find('li.open').not($li);

    //Close open accordions
    $open.children('.accordion_content').slideUp();
    $open.removeClass('open');

    //Open selected accordion
    $li.toggleClass('open');
    $this.next('.accordion_content').slideToggle();
});

// Desktop Dropdown Menu
$(".dropdown_menu_toggle").click(function() {
    $(".dropdown_menus").slideToggle("slow");
});

// Modern Social Media Icon Display
$(".share_icon").mouseover(function() {
    $(".social_icon").addClass("active");
});
$(".share_icon").mouseout(function() {
    $(".social_icon").removeClass("active");
});

// Home Page Toggle
$(function() {
    $(".mycustomCollapseTitle").click(function() {
        $(this).toggleClass("open");
        if ($(this).hasClass("open"))
            $(".mycustomCollapseTitle").not(this).removeClass("open");
    });
});