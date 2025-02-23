function solution(order) {
  let answer = 0;
  String(order)
    .split("")
    .forEach((char) => {
      const num = Number(char);
      if (num % 3 === 0 && num !== 0) {
        answer++;
      }
    });
  return answer;
}
