function solution(ineq, eq, n, m) {
  var answer = 0;
  if (ineq === "<" && eq === "=") return n <= m ? 1 : 0;
  if (ineq === ">" && eq === "=") return n >= m ? 1 : 0;
  if (ineq === "<" && eq === "!") return n < m ? 1 : 0;
  if (ineq === ">" && eq === "!") return n > m ? 1 : 0;
  return answer;
}
