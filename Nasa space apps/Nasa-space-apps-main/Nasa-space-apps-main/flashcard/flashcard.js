var count = 0;
var countX = 0;
var rotationX = 0;

// quests();
if (count == 0) {
    $('.quest').html("EMIT meaning is…");
}



$(".seta1").click(function () {
    if (count != 6 && count < 7) {
        setTimeout(function () {
            count++
            $(".carrossel").css({
                'animation-name': 'moveFrame-right'
            });
            $(".quest").css({
                'animation-name': 'moveFrame-right'
            });
            quests();
            setTimeout(function () {
                $(".carrossel").css({
                    'animation-name': ''
                });
                $(".quest").css({
                    'animation-name': ''
                });
            }, 250);
        }, 650);
    } else if (count > 6) {
        count == 6
    }
});

$(".seta2").click(function () {
    if (count != 0 && count > -1) {
        setTimeout(function () {
            count--
            $(".carrossel").css({
                'animation-name': 'moveFrame-left'
            });
            $(".quest").css({
                'animation-name': 'moveFrame-left'
            });
            quests();
            setTimeout(function () {
                $(".carrossel").css({
                    'animation-name': ''
                });
                $(".quest").css({
                    'animation-name': ''
                });
            }, 250);
        }, 650);
    } else if (count < 0) {
        count == 0
    }
});

$(".carrossel").click(() => {
    setTimeout(() => {
        $(".carrossel").css({
            'animation-name': 'rotationX'
        });
        $(".quest").css({
            'animation-name': 'rotationX'
        });
        res();
        setTimeout(function () {
            $(".carrossel").css({
                'animation-name': ''
            });
            $(".quest").css({
                'animation-name': ''
            });
        }, 250);
    }, 650);
});

function quests() {
    if (count == 0) {
        $('.quest').html("EMIT meaning is…");
    } else if (count == 1) {
        $('.quest').html("Does EMIT help investigate the minerals on the Earth's surface?");
    } else if (count == 2) {
        $('.quest').html("Is EMIT an instrument installed on the ISS?");
    } else if (count == 3) {
        $('.quest').html("EMIT is a powerful tool to help us understand climate change?");
    } else if (count == 4) {
        $('.quest').html("Can EMIT help monitor the health of ecosystems?");
    } else if (count == 5) {
        $('.quest').html("Does EMIT investigate the minerals on Earth's sourface?");
    }
    rotationX = 0;
}

function res() {
    if (count == 0 && rotationX == 0) {
        $('.quest').html("EARTH SURFACE MINERAL DUST INVESTIGATION");
        rotationX = 1;
    } else if (count == 1 && rotationX == 0) {
        $('.quest').html("True");
        rotationX = 1;
    } else if (count == 2 && rotationX == 0) {
        $('.quest').html("True");
        rotationX = 1;
    } else if (count == 3 && rotationX == 0) {
        $('.quest').html("True");
        rotationX = 1;
    } else if (count == 4 && rotationX == 0) {
        $('.quest').html("True");
        rotationX = 1;
    } else if (count == 5 && rotationX == 0) {
        $('.quest').html("True");
        rotationX = 1;
    } else {
        quests()
    }
}