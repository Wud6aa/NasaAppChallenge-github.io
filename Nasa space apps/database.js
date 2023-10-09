var count = 0;

if (count == 0) {
    
}

$(".seta1").click(function(){
    $(".carrossel").css({
        'animation-name': 'moveFrame-right'
    });
});

$(".seta2").click(function(){
    $(".carrossel").css({
        'animation-name': 'moveFrame-left'
    });
});

$(".carrossel").click(() => {
    $(".carrossel").css({
        'animation-name': 'rotationX'
    });
});