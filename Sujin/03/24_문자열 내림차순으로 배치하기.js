function solution(s) {
  let answer = [...s];

  return answer.sort((a, b) => (a < b ? 1 : -1)).join('');
}
