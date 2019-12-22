//Task 1
function splitAndMerge (str, sp) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        result += str[i] + sp;
    }
    return result;
}  
//Task 2
function convert (hash) {
    var result = [];
    var temp = [];

    for(var i in (hash)) {
        temp.push(i, hash[i]);
        result.push(temp);
    }
return (result.sort());
}
//Task 3
function toCamelCase(str){
  var result = ""
  for (var i=0; i<str.length; i++) {
    if ( (str.charAt(i) == '-') || (str.charAt(i) == '_') ) {
      i++
      if (i < str.length) {
        result += str.toUpperCase().charAt(i)
      }
    } else {
      result += str.charAt(i)
    }
  }
  return result
}
//Task 4
function reverse(str) {
   var words = str.split(' ');
   var result = [];
   for(var i = 0; i < words.length; i ++){
     result.push(words[i].split('').reverse().join(''));
   }  
   return result.join(' ');
}
//Task 5
function stringExpansion(str) {
    var splittedStr = str.split('');
    var result = [];
    var multiplier = 1;

    for (var i = 0; i < splittedStr.length; i++) {
      if (splittedStr[i] % 1 === 0) {
        multiplier = +splittedStr[i];
      }
      else {
        result.push(splittedStr[i].repeat(multiplier));
      }
    }
    return result.join('');
}
//Task 6

//Task 7

//Task 8

//Task 9

//Task 10
