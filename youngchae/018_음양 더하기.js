// [20230327] 김영채

function solution(absolutes, signs) {
  var answer = 0;
  // signs[i]가 true면 absolutes[i]를 더해주고,
  // false라면 absolutes[i]를 빼준다.
  for (let i = 0; i < signs.length; i++) {
      if (signs[i]) answer += absolutes[i];
      else answer -= absolutes[i];
  }
  return answer;
}