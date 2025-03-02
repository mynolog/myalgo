function solution(my_string) {
  return [...my_string]
    .filter((char) => !isNaN(char))
    .map((char) => Number(char))
    .reduce((sum, currentValue) => sum + currentValue, 0);
}
