//권희경

function solution(a, b) {
  var answer = 0;

  //1. for문
  //     for (let i = 0; i < a.length; i++){
  //         answer += a[i]*b[i];
  //     }
  // return answer

  //2. map 과 reduce 연습
  return a
    .map((cur, i) => cur * b[i]) // a[i] += a[i]*b[i];
    .reduce((acc, a) => acc + a); //a 배열의 합

  //3. 다른 사람 답중 나중에 참고하고 싶은 것
  //return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
