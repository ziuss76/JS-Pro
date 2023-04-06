//권희경

function solution(price, money, count) {
  var answer = -1;
  let pay = (((count + 1) * count) / 2) * price; // 등차수열 공식 * price
  pay > money ? (answer = pay - money) : (answer = 0); // 돈이 모자르지 않을 경우 0 원
  return answer;
}
