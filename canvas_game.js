var canvas_height, canvas_width;  //畫布大小
var item_max_size = 50; //球的最大數值
var bubble_count = 0;  //球數

//球的資料
var bubble_text_list = new Array();
var bubble_x = new Array();
var bubble_y = new Array();
var bubble_r = new Array();

//球中有字[群組化]
function draw_bubble(x,y,r,bubble_text){
  canvas_circle(x,y,r,0,1,true,"red",true,"blue",2);
  canvas_text(x-r*0.2,y+r*0.3,bubble_text,r*1.1,"green");
}

//球的資料儲存
function bubble_add_list(bubble_text,x,y,r){
  bubble_count ++;
  bubble_text_list.push(bubble_text);
  bubble_x.push(x);
  bubble_y.push(y);
  bubble_r.push(r);
}

function make_bubble(bubble_text) {
  var create_tag;

  //canvas_size();

  //生成球的參數
  r=get_random(10,50);
  x=get_random(r,canvas_width-r);
  y=canvas_height-30;
  console.log("球參數產生: X="+x+", Y="+y+", R="+r);

  //畫球
  draw_bubble(x,y,r,bubble_text);

  //儲存球的資料
  bubble_add_list(bubble_text,x,y,r);
}
