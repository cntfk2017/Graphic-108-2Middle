//JS API
//js_ez_api.js
//Make:2020/03/18
//Author:Ke Fu, Shen
//Version:v0.3

console.log("歡迎使用JS API");

//值表與鍵值表
var char_list = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
var key_list = new Array(65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,48,49,50,51,52,53,54,55,56,57);

//產生亂數(最小值,最大值)
function get_random(min,max){
  var random_int = min+Math.floor(Math.random()*(max-min));
  api_console_log("[JS API]: 亂數產生:"+random_int);
  return random_int;
}

//值轉換成鍵值
function char_to_key(input){
  for(i=0; i<char_list.length; i++){
    if(char_list[i]==input){
      return key_list[i];
    }
  }
}

//隨機選擇文字
function char_random() {
  var random_char = char_list[get_random(0,36)];
  api_console_log("[JS API]: 亂數文字產生:"+random_char);
  return random_char;
}

function keyPress(key,fun) {
  $(document).keydown(function (event) {
    if(event.keyCode == key){
      fun = true;
      api_console_log(key);
    }
  })
}

//顯示控制台除錯資訊
function console_log(text){
  if(log){
    console.log("["+Time()+"] "+text);
  }
}

function api_console_log(text) {
  if(API_log){
    console_log(text);
  }
}

function Time() {
  var dt = new Date;
  return dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
}
