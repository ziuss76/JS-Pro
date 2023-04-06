function solution(arr1, arr2) {
    var answer = [];

    for (let i = 0; i < arr1.length; i++) {
        let sumArray = arr1[i].reduce((sum, _, idx) => {
            sum.push(arr1[i][idx] + arr2[i][idx]);
            return sum;
        }, []);

        answer.push(sumArray);
    }

    return answer;
}
