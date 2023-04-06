function solution(left, right) {
    let answer = 0;

    for (let num = left; num <= right; num++) {
        // let cnt = 0;
        // for (j = 1; j <= num; j++) {
        //     if (num % j === 0)
        //         cnt++;
        // }
        // cnt % 2 === 0 ? answer += num : answer -= num;

        if (Number.isInteger(Math.sqrt(num)) === true) answer -= num;
        else answer += num;
    }

    return answer;
}
