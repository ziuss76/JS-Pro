function solution(n) {
    return parseInt([...(n.toString(3))].reverse().join(''), 3)
}
// 3진법 변환 => spread 후 배열 감싸기 => 뒤집기 => join => 10진법 변환