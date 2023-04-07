function solution(s) {
  const middleIdx = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.substr(middleIdx - 1, 2)
    : s.substr(middleIdx, 1);
}
