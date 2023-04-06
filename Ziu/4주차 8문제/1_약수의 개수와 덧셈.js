function solution(left, right) {
  let ans = 0;
  for (let i = left; i <= right; i++){
      if (Math.sqrt(i) % 1 !== 0) ans += i // 약수가 짝수면 더하고
      else ans -= i // 아님 빼기
  }
  return ans;
}

// 1, 4, 9 처럼 제곱수이면 약수는 홀수