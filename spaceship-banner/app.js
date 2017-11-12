$(document).ready(function () {
    move();

});

function move() {
    $("#spaceship").css("left", "0").animate({
            left: -180,
        },
        5000,
        function () {
            move();
            appear();
        });
};

function appear() {
    $(".ad").show(1500);
}
