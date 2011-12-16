$(function() {
    setTimeout(function() {
        rotate();
    }, 6000);
});

function rotate() {

    var $container = $('div.container');
    var $current = $('div.current');
    var $next = $current.next();

    if ($next.length === 0) {
        $next = $('div.rochester');
    }

    $current.removeClass('current');

    $container.hide();
    $container.attr('id', $next.attr('class'));
    $container.fadeIn(1000);

    $next.addClass('current');

    setTimeout(function() {
        rotate();
    }, 6000);
}
