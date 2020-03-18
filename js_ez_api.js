var char_list = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
var key_list = new Array(65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,48,49,50,51,52,53,54,55,56,57);
//產生亂數(最小值,最大值)
function get_ramdom(min,max){
  return min+Math.floor(Math.random()*(max-min));
}

function char_to_key(input){
  for(i=0; i<char_list.length; i++){
    if(char_list[i]==input){
      return key_list[i];
    }
  }
}
