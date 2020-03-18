//文件載入
$(document).ready(function(){
  canvas_ready("game");
  make_bubble("x");
});

//Test按鈕
function Test() {
  make_bubble(char_random());
}
