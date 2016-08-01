// function countBs(str){
//   var r = 0;
//   for (var i = 0; i < str.length; i++){
//     if (str[i] == "B")
//       r += 1;
//   }
//   return r;
// }

function countChar(str,char) {
  var r = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char)
      r += 1;
  }
  return r;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBBBBsd"));
console.log(countChar("kkkSikkno", "k"));