function solution(s) {
  const map = {};
  const result = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] ?? 0) + 1;
  }
  for (const [char, count] of Object.entries(map)) {
    if (count === 1) {
      result.push(char);
    }
  }
  return result.sort().join("");
}
