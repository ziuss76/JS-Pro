function solution(n) {
    let convertArr = [];

    while (n > 0) {
        let rest = n % 3;
        n = Math.floor(n / 3);
        convertArr.unshift(rest);
    }

    return convertArr.reduce((sum, value, idx) => {
        return (sum += Math.pow(3, idx) * value);
    }, 0);
}
