function solution(age) {
  let answer = "";
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const ages = [...age.toString()].map(Number);
  for (let i = 0; i < ages.length; i++) {
    answer += alphabet[ages[i]];
  }
  return answer;
}
