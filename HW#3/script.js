//Task 1
function splitAndMerge(str, sp) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        continue;
      }
      result += str[i] + sp;
  }
  return result.slice(0, result.length - 1);
}
console.log(splitAndMerge('Hello World!', '-'));
/*At the time of fixing this problem, 
I realized that the choice of "for" cycle was not the most far-sighted,
but decided to finish this decision.
I understand that it looks like a frankstein monster, 
but it was important to me)))))*/

function splitAndMerge (str, sp) {
var result = str.split(" ");  

for (var i in result) {
  result[i] = result[i].split(""); 
 }

 for (var i in result) {
  result[i] = result[i].join(sp); 
 }

return result.join(" "); 
}

/*I decided to add a more concise solution. 
It is not as interesting as the first, but more appropriate*/

//Task 2
function convert(hash) {
    var result = [];
    var temp = [];

    for (var i in (hash)) {
        temp.push(i, hash[i]);
        result.push(temp);
    }
    return (result.sort());
}
//Task 3
function toCamelCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if ((str.charAt(i) == '-') || (str.charAt(i) == '_')) {
            i++;
            if (i < str.length) {
                result += str.toUpperCase().charAt(i)
            }
        } else {
            result += str.charAt(i)
        }
    }
    return result;
}
//Task 4
function reverse(str) {
    var words = str.split(' ');
    var result = [];
    for (var i = 0; i < words.length; i++) {
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
        } else {
            result.push(splittedStr[i].repeat(multiplier));
        }
    }
    return result.join('');
}
//Task 6
function largest() {
    var args = Array.from(arguments);
    var max = args[0];

    for (var i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
    }
    return max;
}

function smallest() {
    var args = Array.from(arguments);
    var min = args[0];

    for (var i = 0; i < args.length; i++) {
        if (args[i] < min) {
            min = args[i];
        }
    }
    return min;
}
//Task 7
function transform(array) {

    return baseArray.map(function (ndx) {
        return function () {
            return ndx;
        }
    })
}


//Task 8
function sum() {
    var args = Array.from(arguments);

    function sumOfArgs(args) {
        if (args.length === 0) {
            return 0;
        }
        return args[0] + sumOfArgs(args.slice(1));
    }
    return sumOfArgs(args);
}
//Task 9
function countDown(num) {

    setTimeout(function sec() {
        console.log(num);
        if (num > 0) {
            setTimeout(sec, 1000);
        }
        num--;
    }, 1000);
}
//Task 10
