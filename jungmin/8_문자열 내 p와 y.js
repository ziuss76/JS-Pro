// 문자열 내 p와 y의 개수
// 주석으로 여러분의 이름과 코드, 해설을 꼭 적어주세요!

// 1. 문자열 s를 대문자 혹은 소문자로 바꾼다.
// 2. 문자열 s를 p 와 y를 기준으로 자른다.
// 3. 잘린 배열의 길이를 비교해서 같으면 true 다르면 false를 리턴한다.

function solution(s){
  s = s.toLowerCase();
  return s.split('p').length === s.split('y').length;
}