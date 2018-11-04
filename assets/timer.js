var sat = {
  2018 : "Nov 15, 2018 08:40:00",
  2019 : "Nov 14, 2019 08:40:00",
  2020 : "Nov 19, 2020 08:40:00"
}

var now = new Date().getTime();
var year = 2018;

while (new Date(sat[year]).getTime() - now < 0) {
  year = year + 1;
}



var x = setInterval(function() {
  var now_interval = new Date().getTime()
  var distance = new Date(sat[year]).getTime() - now_interval;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sat_count").innerHTML = "수능 시작까지 " + days + "일 " + hours + "시간 "
  + minutes + "분 " + seconds + "초.";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sat_count").innerHTML = "이미 너는 최고야 :)";
  }
}, 1000);
