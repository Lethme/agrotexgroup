$(() => {
    $(document).scrollTop(0);
    
    $('.navbar .navbar-toggler').on('click', e => {
        let navbarBtn = $('.navbar .navbar-toggler');
        if (!navbarBtn.hasClass('collapsed')) {
            navbarBtn.addClass('uncollapsed');
        } else {
            navbarBtn.removeClass('uncollapsed');
        }
    });

    $('.navbar .nav-link').on('click', e => {
        let links = $('.navbar .nav-link');
        let link = $(e.target);
        links.removeClass('active');
        link.addClass('active');

        $([document.documentElement, document.body]).animate({
            scrollTop: $(link.attr('href')).offset().top
        }, 500);
    });

    $('body').scrollspy({
        target: '.navbar-nav'
    })

    // $(document).on('scroll', e => {
    //     let navbar = $('.navbar');
    //     if ($(document).scrollTop() === 0) {
    //         navbar.removeClass('fixed-top');
    //     } else {
    //         navbar.addClass('fixed-top');
    //     }
    // });
});