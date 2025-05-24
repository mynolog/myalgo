function solution(my_strings, parts) {
  let answer = "";
  for (let i = 0; i < my_strings.length; i++) {
    const target = my_strings[i];
    const [start, end] = parts[i];
    answer += target.substring(start, end + 1);
  }
  return answer;
}
