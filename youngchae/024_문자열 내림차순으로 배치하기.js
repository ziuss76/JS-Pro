// [20230330] 김영채

function solution(s) {
  // 배열로 만든다.
  // charCodeAt()으로 아스키코드를 불러와 sort로 내림차순 정렬을 해준다.
  // 다시 문자열로 join한다.
  return s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
}