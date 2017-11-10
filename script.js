$(document).ready(function () {
    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('div.dropdown-menu').stop().slideDown();
    }, function () {
        $(this).find('div.dropdown-menu').stop().slideUp();
        });
    $('.my-video').animate({
        marginTop: '',
    }, 600, 'swing', function () {
        $('.my-video').get(1).play();
        $('p.first-p, p.second-p').css({
            transform: 'translateX(0px)',
        });
    });
        $('.my-video').eq(1).on("ended", function() {
            $('.my-video').get(0).play();
            $('.my-video').eq(1).fadeOut(500);
        });
        $('.my-video').eq(0).on("ended", function() {
            $('.my-video').get(1).play();
            $('.my-video').eq(1).fadeIn(500);
        });
});

// var video = document.getElementById('test');
// var jqueryVideo = $("#test").get(0);
// video.addEventListener("ended", function() {
//     console.log('This Works');
// });
//
// jqueryVideo.addEventListener("ended", function() {
//     alert('This Does Not Work');
// });
//
// jqueryVideo.on("ended", function() {
//     jqueryVideo.play();
// });