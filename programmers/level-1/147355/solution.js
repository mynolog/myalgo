function solution(t, p) {
  const numbers = [];

  for (let i = 0; i < t.length; i++) {
    const target = t.slice(i, i + p.length);
    if (target.length === p.length) {
      numbers.push(target);
    }
  }

  return numbers.filter((number) => number <= p).length;
}
