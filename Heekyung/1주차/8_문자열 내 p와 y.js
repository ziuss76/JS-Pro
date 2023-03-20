// 문자열 내 p와 y의 개수
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!
function solution(s) {
  var answer = true;
  let arr = s.split("");
  let arrP = arr.filter((element) => element === "P" || element === "p");
  let arrY = arr.filter((element) => element === "Y" || element === "y");

  arrP.length === arrY.length ? (answer = true) : (answer = false);
  return answer;
}
