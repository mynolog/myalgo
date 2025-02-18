function solution(id_pw, db) {
  let result = "";
  const target = {
    id: id_pw[0],
    pw: id_pw[1],
  };

  db.forEach((auth) => {
    if (auth[0] === target.id && auth[1] === target.pw) {
      result = "login";
    } else if (auth[0] === target.id && auth[1] !== target.pw) {
      result = "wrong pw";
    } else if (auth[0] !== target.id && auth[1] !== target.pw) {
      result = "fail";
    }
  });
  return result;
}
