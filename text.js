var arr1 = [1, 2, 3, 4, 5, 6];

var first = arr1[0]; //1
var second = arr1[1]; //2 //3

if (second > first) {
  for (
    var i = 2;
    i <= arr1.length - 1;
    i++ //2 <=  5 // 4 < = 5
  ) {
    if (arr1[i] > second) {
      // 3 > 2 //4  > 3
      second = arr1[i]; // second = 3 // 4
      if (second > first) {
        // 3 > 1 // 4 > 1
        second = arr1[i]; // second = 3 // second = 4
      }
    }
  }
}

console.log("second", second);
