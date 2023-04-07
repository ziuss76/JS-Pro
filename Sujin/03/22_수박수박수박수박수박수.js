function solution(n) {
  const letter = ['수', '박'];
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += letter[0];
    else answer += letter[1];
  }

  return answer;
}
