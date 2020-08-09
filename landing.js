function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('#home1');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('#home1');
});

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('#menu1');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('#menu1');
});

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('#opinions1');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('#opinions1');
});

$('body').scrollspy({ target: '#navbar-custom' })
