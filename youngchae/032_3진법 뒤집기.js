// [20230406] 김영채

//     45 / 3 = 15 ... 0
//     15 / 3 = 5 ... 0
//     5 / 3 = 1 ... 2 
//     45(10진법) ========> 1200(3진법)
    
//     125 / 3 = 41 ... 2
//     41 / 3 = 13 ... 2
//     13 / 3 = 4 ... 1
//     4 / 3 = 1 ... 1
//     125(10진법) ========> 11122(3진법)
function solution(n) {
// 3진법으로 변환 + reverse
  // 앞뒤가 반전된 3진법 배열
  let reversedTernary = [];
  // n이 3보다 크거나 같을 때만 while문 실행(3으로 나눌 수 있을 때만)
  while (n >= 3) {
    // 3으로 나눈 나머지를 배열에 넣는다.
    reversedTernary.push(n % 3);
    // 3으로 나눈 몫을 다시 n에 할당한다.
    n = Math.floor(n / 3);
  }
  // 가장 마지막 몫을 배열에 넣는다.
  reversedTernary.push(n);
  
// 10진법으로 변환하기
// 1의 자리 수에는 3의 0승, 10의 자리 수에는 3의 1승, 100의 자리 수에는 3의 2승...을 곱해 모두 더한다.
  // 10진수 변수 선언
  let decimal = 0;
  // 지수 변수 선언
  let exponent = reversedTernary.length - 1;
  // 높은 자릿수부터 3의 exponent승을 곱해 decimal에 더해준다.
  for (let i = 0; i < reversedTernary.length; i++) {
    decimal += reversedTernary[i] * (3 ** exponent);
    // 지수를 1씩 줄인다.
    exponent--;
  }
  return decimal;
}