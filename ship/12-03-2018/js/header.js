
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();
var ScrollTop = $(window).scrollTop();

$('#comparison').scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);


function hasScrolled() {

    var st = $('#comparison').scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header-bar').removeClass('nav-down').addClass('nav-up').removeClass('nav-top');
    } else {
        // Scroll Up

        console.log(st + $(window).height() + " vs. " + $('.container--4').height());
        if(st + $(window).height() < $(' .container--4').height()) {
            $('#header-bar').removeClass('nav-up').addClass('nav-down').removeClass('nav-top');
        }
    }



    lastScrollTop = st;
    if (st < 10){
        $('#header-bar').removeClass('nav-down');
        $('#header-bar').addClass('nav-top')
    }
}
