function solution(strArr) {
  const target = "ad";
  return strArr.filter((string) => !string.includes(target));
}
