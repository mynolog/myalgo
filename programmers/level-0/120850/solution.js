function solution(my_string) {
  return [...my_string]
    .filter((value) => !isNaN(Number(value)))
    .map((value) => Number(value))
    .sort((a, b) => a - b);
}
