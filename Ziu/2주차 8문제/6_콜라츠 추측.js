function solution(n) {
    let cnt = 0;
    while (n !== 1){
        if (n % 2 === 0){
            n /= 2;
            cnt++;
        } else {
            n = (n * 3) + 1
            cnt++
        }
    }
    return cnt > 500 ? -1 : cnt;
}
