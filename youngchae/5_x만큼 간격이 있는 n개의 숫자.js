// [20230315] 김영채
function solution(x, n) {
  var answer = [];
  // x부터 시작
  let num = x;
  // 숫자 n개를 push해야 하므로 i <= n
  for (let i = 1; i <= n; i++) {
    answer.push(num);
    // num은 x씩 증가한다
    num += x;
  }
  return answer;
}