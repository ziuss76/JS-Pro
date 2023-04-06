function solution(price, money, count) {
    let priceN = 0;
    for (let i = 1; i <= count; i++){
        priceN += price * i
    }
    return money >= priceN ? 0 : Math.abs(priceN - money)
}
// priceN : 최종 금액
// count 번 타야하는데 탈 때마다 1, 2, 3, 4 배 받음
// 절댓값으로 모자라는 금액 계산