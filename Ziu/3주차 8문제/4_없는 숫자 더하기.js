function solution(numbers) {
    return 45 - numbers.reduce((a,c) => a + c);
}

// 0~9 합 - numbers 의 합 = 나머지 수 1개