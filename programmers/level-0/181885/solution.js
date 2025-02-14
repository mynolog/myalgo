function solution(todo_list, finished) {
  let answer = [];
  finished.forEach((isFinished, index) => {
    if (!isFinished) {
      answer.push(todo_list[index]);
    }
  });
  return answer;
}
