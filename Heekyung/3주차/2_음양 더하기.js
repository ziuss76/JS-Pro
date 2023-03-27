//권희경

function solution(absolutes, signs) {
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === false) {
      //false일 경우
      absolutes[i] *= -1; //동일 위치 값을 음수로 변경
    }
  }
  var answer = absolutes.reduce((a, b) => (a += b)); //배열의 합

  return answer;
}
