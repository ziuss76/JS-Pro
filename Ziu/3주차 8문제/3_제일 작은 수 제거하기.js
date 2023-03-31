function solution(arr) {
    const i = arr.indexOf(Math.min(...arr));
    arr.splice(i, 1);
    return arr.length !== 0 ? arr : [-1];
}
// 웬만하면 slice 쓰려고 했는데 바로 다음문제에 splice 쓰게 만드네
// 가장 작은 수의 인덱스 = i
// i 부터 1개 제거
// 최솟값 제거한 arr 가 길이가 남아있으면 리턴, 아니면 [-1] 리턴