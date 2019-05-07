var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onPlayerReady(event) {
    event.target.playVideo();//자동재생
    //로딩할때 실행될 동작을 작성한다.
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
      //플레이어가 재생중일때 작성한 동작이 실행된다.
  }
}

var youTubePlayer1;
function onYouTubeIframeAPIReady() {
  youTubePlayer1 = new YT.Player('youtube', {
      width: '1000',
      height: '563',
      videoId: '6ysQb3DggqQ',
      playerVars: {rel: 0, controls: 0},//추천영상 안보여주게 설정
      events: {
        // 'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
      }
  }); // youTubePlayer1셋팅
}

$(document).ready(function () {

  $("#mainImg").on("click", function () {
      youTubePlayer1.playVideo();//재생
      document.getElementById('youtube').style.display = "inline";
      document.getElementById('mainImg').style.display = "none";

  });

  var index = 1;
  $("#nextButton").click(function(){
    index++;
    if( index > 3 ){
      index = 1;
    }
      $("#mainImg").attr("src","images/mainImg" + index +".png");
      $("#mainImg").attr("width","1000px");
      $("#mainImg").attr("height","404px");
      return false;
  });

  $("#prevButton").click(function(){
    index--;
    if( index < 1 ){
      index = 3;
    }
      $("#mainImg").attr("src","images/mainImg" + index +".png");
      $("#mainImg").attr("width","1000px");
      $("#mainImg").attr("height","404px");
      return false;
  });
});

var openWin;



function popup() { // 모달창 부분
  // url = "steak.html";
  // specs = "width=750, height=500, top=200, left=400, menubar=no, scrollbars=no"
  // openWin = window.open(url,"", specs);
  var menu = event.target.parentNode.parentNode.id; // 클릭한 이미지에 대한 메뉴 값
  var menulist = ["steak", "rice", "pizza", "pasta"];
  var index;

  for (var i = 0; i < menulist.length; i++) { // 클릭한 이미지와 일치한 메뉴리스트만 보여주도록
    if (menulist[i] == menu) {
      index = i;
      document.getElementById(menu + "Img").style.display = "inline";
    } else
      document.getElementById(menulist[i] + "Img").style.display = "none"; // 나머지는 사라지게
  }

  document.getElementById('writingTransparentBorder').style.display = "inline";
  document.getElementById('writingFormContainer').style.display = "inline";

}

function closeButton() { // 모달창 닫기
  document.getElementById('writingFormContainer').style.display = "none";
  document.getElementById('writingTransparentBorder').style.display = "none";
}

function menulook(ev) {
  var menu = event.target.innerHTML;
  var menulist = ["STEAK", "RICE", "PIZZA", "PASTA"];
  var element = document.getElementsByClassName(menu);

  for(var j = 0; j < menulist.length; j ++){
    if(menulist[j] == menu){
      element = document.getElementsByClassName(menu);
      document.getElementById(menulist[j]+'Menu').style.display = "inline";
    }
    else
      document.getElementById(menulist[j]+'Menu').style.display = "none";
  }

  //
  // for (var i = 0; i < element.length; i++) {
  //   element[i].style.display = "inline";
  // }

  // document.getElementById('rice1').style.display = "inline";
}


var youTubePlayer2;

function onYouTubeIframeAPIReady() {
  youTubePlayer2 = new YT.Player('youtube2', {
      width: '1000',
      height: '563',
      videoId: 'UJQIfKxfEM4',
      playerVars: {rel: 0, controls: 0 },//추천영상 안보여주게 설정
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange //플레이어 상태 변화시 이벤트실행
      }
  });//youTubePlayer2셋팅
}

myMap();

function myMap() {
  var uluru = {lat: 36.362807, lng: 127.34486}; // 위치
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({ // 마커
    position: uluru,
    map: map
  });
}

function initMap() { // 지도 가져오기
  var uluru = {lat: 36.362807, lng: 127.34486}; // 위치
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({ // 마커
    position: uluru,
    map: map
  });
}
