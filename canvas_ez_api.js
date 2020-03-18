var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//畫圓
//使用方式:
//  canvas_circle(x軸,y軸,半徑,畫圓起始[0度=0,一個圓為1],畫圓結尾,是否填色,填的顏色,是否邊框,邊框顏色,邊框寬度);
function canvas_circle(x,y,r,start,end,fill,fill_color,stroke,stroke_color,stroke_width){
  ctx.beginPath();
  ctx.arc(x, y, r, 2*Math.PI*start, 2*Math.PI*end);
  ctx.closePath();
  if(fill==true){
    ctx.fillStyle = fill_color;
    ctx.fill();
  }
  if(stroke==true){
    ctx.strokeStyle = stroke_color;
    ctx.lineWidth = stroke_width;
    ctx.stroke();
  }
}

function canvas_text(x,y,text,text_size,text_color){
  ctx.font = text_size+"px Arial";
  ctx.fillStyle = text_color;
  ctx.fillText(text, x, y);
}
