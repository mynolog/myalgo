function solution(x) {
  let answer = true;
  let splitedNum = x.toString().split("");
  let sum = 0;
  sum = splitedNum.reduce((a, b) => Number(a) + Number(b));
  return (answer = x % sum !== 0 ? false : true);
}
