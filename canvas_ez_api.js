//Canvas物件參數
var canvas_id;
var canvas;
var ctx;

var canvas_height, canvas_width;  //畫布大小

//載入Canvas物件[含物件長寬偵測]
function canvas_ready(id) {
  canvas_id = id;
  canvas = document.getElementById(canvas_id);
  ctx = canvas.getContext("2d");
  canvas_size(canvas_id);
}

//偵測Canvas物件長寬
function canvas_size(canvas_id) {
  canvas_width = $('#'+canvas_id).attr("width");
  canvas_height = $('#'+canvas_id).attr("height");
  console.log("畫布大小:"+canvas_width+"X"+canvas_height);
}

//Canvas畫圓
//使用方式:
//  canvas_circle(x軸,y軸,半徑,畫圓起始[0度=0,一個圓為1],畫圓結尾,是否填色,填的顏色,是否邊框,邊框顏色,邊框寬度);
function canvas_circle(x,y,r,start,end,fill,fill_color,stroke,stroke_color,stroke_width){
  ctx.beginPath();
  ctx.arc(x, y, r, 2*Math.PI*start, 2*Math.PI*end);
  ctx.closePath();
  console.log("畫一顆球 X:"+x+", Y:"+y+", 半徑:"+r+", on "+ canvas +"->ID:"+ canvas_id);
  if(fill==true){
    ctx.fillStyle = fill_color;
    ctx.fill();
    console.log("填滿:"+fill_color);
  }
  if(stroke==true){
    ctx.strokeStyle = stroke_color;
    ctx.lineWidth = stroke_width;
    ctx.stroke();
    console.log("邊框:"+stroke_color+","+stroke_width+"px");
  }
}

//Canvas字
//使用方式:
//  canvas_text(x軸,y軸,文字,文字大小,文字顏色);
function canvas_text(x,y,text,text_size,text_color){
  ctx.font = text_size+"px Arial";
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);
}
