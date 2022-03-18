$(document).ready(function(){

    // SKILLS BOX 1
    let bool1 = 1;
    $(".skills__list").hide(0);

    $("#skills__header-1").click(function(){
        if (bool1 === 0){
            $("#skills__list-1").slideUp('fast');
            $("#skills__arrow1").addClass('rotated');
            bool1 = 1;
        } else {
            $("#skills__list-1").slideDown('fast');
            $("#skills__arrow1").removeClass('rotated');
            bool1 = 0;
        }
    });

    //SKILLS BOX 2
    let bool2 = 1;

    $("#skills__header-2").click(function(){
        if (bool2 === 0){
            $("#skills__list-2").slideUp('fast');
            $("#skills__arrow2").addClass('rotated');
            bool2 = 1;
        } else {
            $("#skills__list-2").slideDown('fast');
            $("#skills__arrow2").removeClass('rotated');
            bool2 = 0;
        }
    });
});