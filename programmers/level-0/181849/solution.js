function solution(num_str) {
  const num_list = num_str.split("");
  return num_list.reduce((cv, acc) => Number(cv) + Number(acc));
}
