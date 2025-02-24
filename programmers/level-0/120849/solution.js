function solution(my_string) {
  let answer = "";
  const VOWELS = ["a", "e", "i", "o", "u"];

  my_string.split("").filter((char) => {
    if (!VOWELS.includes(char)) {
      answer += char;
    }
  });
  return answer;
}
