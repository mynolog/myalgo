function solution(arr, n) {
  var answer = [];
  if (arr.length % 2 === 0) {
    answer = arr.map((num, index) => {
      if (index % 2 === 1) {
        return num + n;
      } else {
        return num;
      }
    });
  } else {
    answer = arr.map((num, index) => {
      if (index % 2 === 0) {
        return num + n;
      } else {
        return num;
      }
    });
  }
  return answer;
}
