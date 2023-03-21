function solution(x) {
    const sumResult = [...String(x)]
		.map(v => Number(v))
        .reduce((sum, curr) => sum + curr, 0);
    
    if (x % sumResult === 0)
        return true;
    else
        return false;
}
