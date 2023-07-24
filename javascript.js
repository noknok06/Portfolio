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

    $('.github_icon i').hover(
        function() {
            $(this).css('color', 'gray');
        },
        function() {
            $(this).css('color', 'white');
        }
    );
});