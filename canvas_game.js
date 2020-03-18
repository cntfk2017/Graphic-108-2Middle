var canvas_height, canvas_width;
var item_max_size = 50;
var bubble_count = 0;
var bubble_text_list = new Array();
var bubble_x = new Array();
var bubble_y = new Array();
var bubble_r = new Array();


$(document).ready(function(){
  canvas_width = $('#game').attr("width");
  canvas_height = $('#game').attr("height");

});

function draw_bubble(x,y,r,bubble_text){
  canvas_circle(x,y,r,0,1,true,"red",true,"blue",2);
  canvas_text(x-r*0.2,y+r*0.3,bubble_text,r*1.1,"green");
}

function bubble_add_list(bubble_text,x,y,r){
  bubble_count ++;
  bubble_text_list.push(bubble_text);
  bubble_x.push(x);
  bubble_y.push(y);
  bubble_r.push(r);
}

function make_bubble(bubble_text) {
  var create_tag;

  canvas_width = $('#game').attr("width");
  canvas_height = $('#game').attr("height");

  r=get_ramdom(10,30);
  x=get_ramdom(r,canvas_width-r);
  y=30;

  draw_bubble(x,y,r,bubble_text);
  bubble_add_list(bubble_text,x,y,r);
}
