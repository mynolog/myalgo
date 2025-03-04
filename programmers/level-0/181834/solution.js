function solution(myString) {
  return [...myString]
    .map((char) => {
      // 108보다 작으면 "l" 반환
      if (char.charCodeAt() < 108) {
        return "l";
        // 108보다 크거나 같으면 문자열 그대로 반환
      } else {
        return char;
      }
    })
    .join("");
}
