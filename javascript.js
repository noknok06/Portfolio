$(function($) {

    function moveLabel() {
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html, body').animate({
            'scrollTop': position - 30
        }, 500);
    }

    $('.navbar-nav a').click(moveLabel);
    $('.footer-menu li a').click(moveLabel);

    $('.github_icon').hover(
        function() {
            $(this).animate({
                'font-size': '70px'
            }, 300);
        },
        function() {
            $(this).animate({
                'font-size': '50px'
            }, 300);
        }
    );
});