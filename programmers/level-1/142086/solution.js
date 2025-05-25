function solution(s) {
  let answer = [];
  const lastIndexMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (lastIndexMap.has(char)) {
      answer.push(i - lastIndexMap.get(char));
    } else {
      answer.push(-1);
    }
    lastIndexMap.set(char, i);
  }
  return answer;
}
