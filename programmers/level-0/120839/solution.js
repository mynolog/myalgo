function solution(rsp) {
  const rspList = rsp.split("");
  const rspResult = [];
  rspList.forEach((game) => {
    switch (game) {
      case "2":
        rspResult.push("0");
        break;
      case "0":
        rspResult.push("5");
        break;
      case "5":
        rspResult.push("2");
      default:
        return;
    }
  });
  return rspResult.join("");
}
