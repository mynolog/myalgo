function solution(my_string, n) {
  let newString = my_string.split("");
  return newString.map((string) => string.repeat(n)).join("");
}
