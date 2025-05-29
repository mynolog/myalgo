function solution(num, k) {
  const index = num.toString().split("").indexOf(String(k));
  return index === -1 ? -1 : index + 1;
}
