$(function() {

    var $categoryContainer = $('.category-container');

    var $categoryOne = $('.category-one');

    var $categoryTwo = $('.category-two');

    var $orchestrationList = $('.orchestration-list');

    var $choralList = $('.choral-list');

    var $item = $('.item');

    $categoryOne.on('click', function() {

        $orchestrationList.slideDown(500);

        $categoryContainer.addClass('main-margin-add');

    });

    $orchestrationList && $categoryOne.on('mouseleave', function() {

        $orchestrationList.slideUp(500);


    });


    $categoryTwo.on('click', function() {

        $choralList.slideDown(500);

        $categoryContainer.addClass('main-margin-add');

    });

    $choralList && $categoryTwo.on('mouseleave', function() {

        $choralList.slideUp(500);
        

    });

});
