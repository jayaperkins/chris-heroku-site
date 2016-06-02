$(function() {

    var $categoryOne = $('.category-one');

    var $categoryTwo = $('.category-two');

    var $orchestrationList = $('.orchestration-list');

    var $choralList = $('.choral-list');

    $categoryOne.on('click', function() {

        $orchestrationList.slideDown(200);

    });

    $orchestrationList.on('mouseleave', function() {

        $orchestrationList.slideUp(200);

    });


    $categoryTwo.on('click', function() {

        $choralList.slideDown(200);

    });

    $choralList.on('mouseleave', function() {

        $choralList.slideUp(200);

    })
});
