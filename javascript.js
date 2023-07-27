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

    $(".timeline-header span").click(function() {
        var index = $(".timeline-header span").index(this);
        var $select = $(".timeline-content").eq(index);

        var is_open = $select.find('.timeline-header span').text();
        if (is_open == '+') {
            $select.find('p').slideDown();
            $select.find('.timeline-header span').text("-");
        } else {
            $select.find('p').slideUp();
            $select.find('.timeline-header span').text("+");
        }
    });
});