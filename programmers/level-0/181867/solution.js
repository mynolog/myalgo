function solution(myString) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "x") {
      answer.push(count);
      count = 0;
    } else {
      count += 1;
    }
  }
  answer.push(count);
  return answer;
}
