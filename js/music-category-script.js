$(function() {

    var $categoryOne = $('.category-one');

    var $categoryTwo = $('.category-two');

    var $orchestrationList = $('.orchestration-list');

    var $choralList = $('.choral-list');

    var $item = $('.item');

    $categoryOne.on('click', function() {

        $orchestrationList.slideDown(500);

    });

    $orchestrationList && $categoryOne.on('mouseleave', function() {

        $orchestrationList.slideUp(500);

    });


    $categoryTwo.on('click', function() {

        $choralList.slideDown(500);

    });

    $choralList && $categoryTwo.on('mouseleave', function() {

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
