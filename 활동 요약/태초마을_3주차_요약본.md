## 1_핸드폰 번호 가리기
```js
function solution(phone_number) {
  let answer = '*'.repeat(phone_number.length - 4);

  answer += phone_number.substr(phone_number.length - 4, 4);

  return answer;
}
function solution(phone_number) {
  let answer = ""
  for (let i = 0; i < phone_number.length - 4; i++) {
      answer += '*'
  }
  answer += phone_number.slice(-4)
  return answer;
}
function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
}
```
## 2_음양 더하기

```js
function solution(absolutes, signs) {
  return absolutes.reduce((sum, value, idx) => {
    // if (signs[idx]) sum += value;
    // else sum -= value;

    signs[idx] === true ? (sum += value) : (sum -= value);

    return sum;
  }, 0);
}
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
      answer += signs[i] ? absolutes[i] : -absolutes[i]
  }
  return answer;
}
function solution(abs, signs) {
    let ans = 0;
    for (let i = 0; i < abs.length; i++){
        if (signs[i]) ans += abs[i]
        else ans -= abs[i]
    }
    return ans;
}

```
## 3_제일 작은 수 제거하기
```js
function solution(arr) {
  if (arr.length === 1) return [-1];

  const minNum = +Math.min(...arr);

  arr.splice(arr.indexOf(minNum), 1);

  return arr;
}
// 1. 주어진 배열의 길이가 1인 경우 최소값을 제외하면 길이가 0이 되기 때문에 먼저 -1을 리턴해준다.
// 2. 최솟값을 구한다.
// 3. 배열을 반복하며 최솟값을 제외해준다.

function solution(arr) {
  if (arr.length === 1) return [-1]
  
  let min = Math.min.apply(null, arr)
  
  return arr.filter(num => num !== min)
}
function solution(arr) {
    const i = arr.indexOf(Math.min(...arr));
    arr.splice(i, 1);
    return arr.length !== 0 ? arr : [-1];
}
// 웬만하면 slice 쓰려고 했는데 바로 다음문제에 splice 쓰게 만드네
// 가장 작은 수의 인덱스 = i
// i 부터 1개 제거
// 최솟값 제거한 arr 가 길이가 남아있으면 리턴, 아니면 [-1] 리턴

```
## 4_없는 숫자 더하기
```js
function solution(numbers) {
  let map = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((value) => {
    if (map.includes(value)) {
      const delIdx = map.indexOf(value);

      map.splice(delIdx, 1);
    }
  });

  return map.reduce((sum, cur) => sum + cur, 0);
}
// 1. 1부터 주어진 배열내의 최대 값인 9까지 반복한다.
// 2. 반복하면서 배열내의 숫자가 없다면 더해준다.

function solution(numbers) {
  let answer = 0;
  for (let i = 1; i <= 9; i++) {
      if (!numbers.includes(i)) answer += i
  }
  return answer;
}
function solution(numbers) {
    return 45 - numbers.reduce((a,c) => a + c);
}

// 0~9 합 - numbers 의 합 = 나머지 수 1개
function solution(numbers) {
  var answer = 0;
  let sum0to9 = 0;

  for (i = 0; i <= 9; i++) {
    //0~9의 합
    sum0to9 += i;
  }

  let sumNumbers = numbers.reduce((a, b) => a + b); // numbers의 합

  answer = sum0to9 - sumNumbers; //0~9까지 없는 수의 합을 구하는 것이기 때문에...

  return answer;
}


```
## 5_가운데 글자 가져오기
```js
function solution(s) {
  // center는 가운데 수
  let center = Math.ceil(s.length / 2) - 1;
  if (s.length % 2 === 0) {
      // 문자열 길이가 짝수일 경우 center부터 총 2자리 slice
      return s.slice(center, center + 2);
  } else {
      // 홀수일 경우 s[center] 리턴
      return s[center];
  }
}
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
function solution(s) {
    return s.length % 2 ? s[parseInt(s.length / 2)]
    : s[(s.length / 2) - 1] + s[s.length / 2]
}
// 2로 나눈 나머지 ? 가운데 글자 (길이 5 => 2.5에서 내림 => 2 => 세 번째)
// 나머지가 없으면 가운데 두 글자 (길이 4 => 2 - 1, 2 => 두 번째, 세 번째)
// substr => ECMA 표준언어에서 빠짐 부록에 있는 거라 공식적으로는 slice를 추천 한다고

```
## 6_수박수박수박수박수박수
```js
function solution(n) {
  const letter = ['수', '박'];
  let answer = '';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += letter[0];
    else answer += letter[1];
  }

  return answer;
}
function solution(n) {
  var answer = "";

  if (n % 2 === 0) {
    answer = "수박".repeat(n / 2); //짝수일 경우 "박"으로 끝난다.
  } else {
    answer = "수박".repeat((n - 1) / 2) + "수"; // 홀수일 경우 "수"로 끝난다.
  }

  return answer;
}
function solution(n) {
    let s = "수박".repeat(n);
    return s.slice(0,n)
}
// n = 3 이면 (수박수박수박 => 수박수)
// n = 4 이면 (수박수박수박수박 => 수박수박)


```
## 7_내적
```js
function solution(a, b) {
  let answer = 0;

  a.forEach((value, idx) => {
    answer += value * b[idx];
  });

  return answer;
}
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
function solution(a, b) {
    return a.reduce((acc,c,i) => acc + (a[i] * b[i]), 0)
}
// a 길이만큼 누적 합
// a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]

```
## 8_문자열 내림차순으로 배치하기
```js
function solution(s) {
  // 배열로 만든다.
  // charCodeAt()으로 아스키코드를 불러와 sort로 내림차순 정렬을 해준다.
  // 다시 문자열로 join한다.
  return s
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('');
}
function solution(s) {
  return s.split("").sort().reverse().join("");
}
function solution(s) {
    return [...s].sort().reverse().join('')
}
// 와편하다 sort
```
