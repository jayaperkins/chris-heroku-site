$(function() {

    var $body = $('body');

    var $categoryOne = $('.category-one');

    var $categoryTwo = $('.category-two');

    var $orchestrationList = $('.orchestration-list');

    var $choralList = $('.choral-list');

    var $item = $('.item');

    $categoryOne.on('click', function() {

        $orchestrationList.slideDown(500);

    });

    $orchestrationList.on('mouseleave', function() {

        $orchestrationList.slideUp(500);

    });


    $categoryTwo.on('click touchstart', function() {

        $choralList.slideDown(500);

    });

    $choralList.on('mouseleave touchend', function() {

        $choralList.slideUp(500);

    });

    $item.on('mouseover', function() {

        $(this).removeClass('item');

        $(this).addClass('item-hover');

    });

    $item.on('mouseleave', function() {

        $(this).removeClass('item-hover');

        $(this).addClass('item');

    });

});
