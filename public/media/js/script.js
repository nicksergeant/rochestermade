$(function() {

    var slide = getParameterByName('slide');

    if (slide !== '') {
        if ($('div.' + slide).length) {
            $('div.current').removeClass('current');
            $('div.' + slide).addClass('current');
            $('div.container').attr('id', slide);
        } else {
            init();
        }
    } else {
        init();
    }

    $awesome = $('div.awesome');

    $('a#logo').click(function() {
        //$awesome.fadeToggle(100);
        return false;
    });
    $('a.close', $awesome).click(function() {
        $awesome.fadeOut(100);
        return false;
    });
    $('div.choose a', $awesome).click(function() {
        $('textarea', $awesome).hide();
        $('textarea.' + $(this).attr('class')).show();
        return false;
    });
    $awesome.click(function(event){
        event.stopPropagation();
    });
    $('textarea', $awesome).click(function() {
        $(this).select();
        return false;
    });
    $('html').click(function() {
        $awesome.hide();
        return false;
    });
});

function init() {
    setTimeout(function() {
        rotate();
    }, 6000);
}
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
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results === null) {
        return "";
    }
    else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}
