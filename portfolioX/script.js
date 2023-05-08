$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.pro1').click(function() {
        window.open('https://github.com/mohdsavej/dector-appointment-app');
    });

    $('.pro2').click(function() {
        window.open('https://github.com/mohdsavej/covid-dec');
    });

    $('.pro3').click(function() {
        window.open('https://github.com/mohdsavej/tech-blog-');
    });
   

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a Competitive Programmer", "a Web Developer", "a Learner","a Content Creator", "a explorer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a Coder", "a Web Developer", "a Learner", "a explorer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.card').click(function() {
        $(this).find('a').trigger('click');
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});