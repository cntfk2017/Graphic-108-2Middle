//Game.js
//Make:2020/03/18
//Author:Ke Fu, Shen
//Version:v0.3
//前置JS:jQuery(jquery-3.4.1.js)、Canvas API[v0.3](canvas_ez_api.js)、JS API[v0.3](js_ez_api.js)

var canvas_height, canvas_width;  //畫布大小
var item_max_size = 50; //球的最大數值
var bubble_count = 0;  //球數

//球的資料
var bubble_text_list = new Array();
var bubble_x = new Array();
var bubble_y = new Array();
var bubble_r = new Array();
var bubble_get = new Array();
var bubble_boom = new Array();

//球中有字[群組化]
function draw_bubble(x,y,r,bubble_text){
  canvas_circle(x,y,r,0,1,true,"red",true,"blue",2);
  canvas_text(x-r*0.24,y+r*0.3,bubble_text,r*1.1,"green");
}

//儲存球的資料
function bubble_add_list(bubble_text,x,y,r){
  bubble_count ++;  //球數量+1
  bubble_text_list.push(bubble_text); //存入文字
  bubble_x.push(x); //存入X軸
  bubble_y.push(y); //存入Y軸
  bubble_r.push(r); //存入半徑r
  bubble_get.push(false);//按鍵未被觸發
  bubble_boom.push(false);
}

function bubble_change_list(i,x,y,r){
  bubble_x[i]=(x); //存入X軸
  bubble_y[i]=(y); //存入Y軸
  bubble_r[i]=(r); //存入半徑r
}

function bubble_clear() {
  bubble_count = 0;
  bubble_text_list.length = 0;
  bubble_x.length = 0;
  bubble_y.length = 0;
  bubble_r.length = 0;
  bubble_get.length = 0;
  bubble_boom.length = 0;
}

function make_bubble(bubble_text) {
  //生成球的參數
  r=get_random(10,50);
  x=get_random(r,canvas_width-r);
  y=canvas_height;
  y=parseInt(y)+r+1;
  console_log("[Game]: 球參數產生: X="+x+", Y="+y+", R="+r);

  //畫球
  draw_bubble(x,y,r,bubble_text);

  //儲存球的資料
  bubble_add_list(bubble_text,x,y,r);
  keyPress_change(char_to_key(bubble_text),bubble_count-1);
}

function keyPress_change(key,fun) {
  $(document).keydown(function (event) {
    if(event.keyCode == key){
      bubble_get[fun] = true;
      console_log(fun+":"+bubble_get[fun]+"\nKey_num:"+key);
      Refresh();
    }
  })
}

function bubble_add() {
  make_bubble(char_random());
}

function Refresh() {
  score = 0;
  canvas_clear();
  console_log("Interval Refresh!");
  for(i=0; i<bubble_count; i++){
    if(!bubble_get[i]){
      draw_bubble(bubble_x[i],bubble_y[i],bubble_r[i],bubble_text_list[i]);
    }else{
      score += 10;
    }
  }
  $("#score").val(score);
}

function bubble_move() {
  score = 0;
  canvas_clear();
  for(i=0; i<bubble_count; i++){
    if(!bubble_get[i]&&!bubble_boom[i]){
      bubble_change_list(i,bubble_x[i],bubble_y[i]-bubble_r[i]*0.01,bubble_r[i]+0.02);
      draw_bubble(bubble_x[i],bubble_y[i],bubble_r[i],bubble_text_list[i]);
	  if((bubble_y[i]-bubble_r[i])<0){
		  bubble_boom[i] = true;
		  console_log(i+"-boom:"+bubble_boom[i]);
	  }
    }else if(bubble_boom[i]){
		score -= 10;
	}else{
      score += 10;
    }
  }
  $("#score").val(score);
}
