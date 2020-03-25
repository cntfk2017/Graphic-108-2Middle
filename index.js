//index.js
//Make:2020/03/19
//Author:Ke Fu, Shen
//Version:v0.3
//前置JS:jQuery(jquery-3.4.1.js)、Canvas API[v0.3](canvas_ez_api.js)、JS API[v0.3](js_ez_api.js)、Canvas Game[v0.3](canvas_game.js)

var control_status = true;  //目前控制狀態(True:表示可以開始，False:表示可以停止)

//Interval區
var add_bubble; //新增球
var move_bubble;  //更新球移動
var clock;

//Console記錄區(關掉可以提升性能、降低延遲)
var log = true; //Console紀錄是否輸出
var API_log = false; //[API] Console紀錄是否輸出

//文件載入
$(document).ready(function(){
  console_log("Loading......");
  canvas_ready("game");

  //測試球
  make_bubble("X");
  make_bubble("Y");
  make_bubble("Z");
});

//開始與停止按鈕
function control(){
  if(control_status){
    //重置分數
    $("#score").val(0);

    //持續運作區
      //新增泡泡(依等級難度調整-每0.05~3秒)
      add_bubble = setInterval(bubble_add,$("#mode").val());
      //重畫泡泡[移動](每0.01秒刷新一次)
      move_bubble = setInterval(bubble_move,10);
      //時間倒數(每1秒刷新一次)
      clock = setInterval(function () {
        //時間更新
        $("#time").val($("#time").val()-1);
        //當時間歸零時
        if($("#time").val()==0){
          //停止遊戲
          control();
        }
      },1000);

    //更改按鍵名稱
    $("#control").val("Stop");

    //DeBug資訊
    console_log("[Interval]: Start");

    //完成程序 將狀態改為可以停止
    control_status = false;
  }else {
    //持續運作結束區
      //結束新增泡泡
      clearInterval(add_bubble);
      //結束重畫泡泡
      clearInterval(move_bubble);
      //結束時間倒數
      clearInterval(clock);

    //重設時間為60秒
    $("#time").val(60);
    //更改按鍵名稱
    $("#control").val("Start");

    //畫布清空
    canvas_clear();
    //泡泡紀錄清空
    bubble_clear();

    //DeBug資訊
    console_log("[Interval]: Stop");

    //完成程序 將狀態改為可以開始
    control_status = true;
  }

}
