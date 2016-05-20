//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    function scaleVideoContainer() {
        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);
    }

    function initBannerVideoSize(element){
        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);
    }

    function scaleBannerVideoSize(element){

        var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

        console.log(windowHeight);

        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }
    
    var startFlag = true;
    var arr = ["하오치", "맘스터치", "롯데리아", "동큐", "1학", 
                "2학", "3학", "육쌈", "갈쌈", "EXIT", "본도시락", 
                "조마루", "두리가마", "미스터피자", "서브웨이", "롯데리아", 
                "아저씨", "일미", "오늘은닭", "맛존", "유가네",
                "충만치킨", "왕큰손파닭", "봉구스 밥버거", "편의점행", "오쭈", "스바라시", "한솥"];
    // var colors = ["#F7C9C9", "#F7776A", "#90A7D1", "#014C8F", 
    //                 "F9E137", "98DCDD", "#9896A4", "#DD443C", 
    //                 "#B08E69", "#72CA4F"];
    var ob = document.getElementById("store");
    var intervalId = 0;

    ob.onclick = function(){
        startFlag = !startFlag;
        var time = 0;
        var r = Math.floor((Math.random() * arr.length) + 1);
        ob.innerText = arr[r-1];
        clearInterval(intervalId);

        if(!startFlag){
             jQuery(function($){
                var $store = $('#store');
                var $cl = $('#cl');
                intervalId = setInterval(function(){
                    var r = Math.floor((Math.random() * arr.length) + 1);
                    $store.text(arr[r-1]);
                    time += 100;

                    if(time > 3000){
                        $cl.html('<span style="font-size: 36px;">click</span>');
                    }

                    if(time > 7000)
                        $cl.html('<span style="font-size: 36px;">3</span>');

                    if(time > 8000)
                        $cl.html('<span style="font-size: 36px;">2</span>');

                    if(time > 9000)
                        $cl.html('<span style="font-size: 36px;">1</span>');

                    if(time > 10000){
                        ob.onclick();
                    }
                }, 100);
            });
        }

        if(startFlag){
            var $cl = $('#cl');
            $cl.html('');
        }
    };
});

function realtimeClock() {
    document.getElementById("timestamp").innerHTML = getTimeStamp();
    setTimeout("realtimeClock()", 1000);
}
    
function getTimeStamp() { // 24시간제
    var d = new Date();

    var s =
    leadingZeros(d.getHours(), 2) + ':' +
    leadingZeros(d.getMinutes(), 2) + ':' +
    leadingZeros(d.getSeconds(), 2);

    return s;
}

function leadingZeros(n, digits) {
    var zero = '';
    var i;
    n = n.toString();

    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
        }
    return zero + n;
}