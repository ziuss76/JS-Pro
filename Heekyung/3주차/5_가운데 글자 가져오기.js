//권희경

function solution(s) {
  let answer = "";
  var mid = s.length / 2; //가운데 찾기
  if (s.length % 2 === 0) {
    //짝수일 경우
    answer = s[mid - 1] + s[mid];
  } else {
    answer = s[Math.floor(mid)]; //홀수일 경우
  }
  return answer;
}
