//jQuery is required to run this code
$( document ).ready(function() {
    colors = ["#1abc9c","#3498db","#ea5b4d","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#f1c40f","#e67e22",
                "#e74c3c","#f39c12","#d35400","#c0392b","#06b3db","#e3b63d","#dc3d66","#bd3559","#0082c8","#16528e",
                "#e54b4b","#a2c5bf","#167c80","#72616e","#72BDC2","#F99899","#2C9AB7","#52BAD5","#6DC5DC","#B1E0EC",
                "#449A88","#72C1B0","#95D1C4","#C5E5DE","#FEBE12","#FED156","#DB3A1B","#E85C41","#EE836E","#66CC99",
                "#8A9BB1","#CC89A2","#C26787","#64AE60","#27695E","#993366","#8E368B","#345773","#E8755C","#DB334E",
                "#98AE60","#78AD45","#547B30","#527D5A","#D83944","#993366","#782344","#8ADCB3"];
    
    setInterval(function() {
        var random_number = Math.floor(Math.random() * colors.length);
        $(document.body).css({ backgroundColor: colors[random_number] });
      }, 5000);
	
    
    
    var startFlag = true;
  //  var arr = ["하오치", "맘스터치", "롯데리아", "동큐", "1학", 
  //              "2학", "3학", "육쌈", "갈쌈", "EXIT", "본도시락", 
  //              "조마루", "두리가마", "미스터피자", "서브웨이", "롯데리아", 
    //            "아저씨", "일미", "오늘은닭", "맛존", "유가네",
          //      "충만치킨", "왕큰손파닭", "봉구스 밥버거", "편의점행", "오쭈", "스바라시", "한솥"];
    
    var arr = ["반포식스", "맥도날드", "얼룩도야지", "코다리냉면", 
		   "제일제면소", "한우국밥", "홍대칼족", "무명식당", 
		   "진짜돼지", "사보텐", "도원참치", "매드후라이드치킨", 
	       	   "센트럴차이나", "차이나팩토리", "양재정육식당", "라멘천하",
	           "매일식당", "도니족발", "조선육회", "시골백반", "유스페이스",
	           "코코이찌방야", "하코야", "캘리포니아 피자 치킨"];
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
		    if(arr[r-1].length >= 6) {
			$store.css({ fontSize: "96px"});
		    } else {
		        $store.css({ fontSize: "128px" });
		    }
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



