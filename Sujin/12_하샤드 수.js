function solution(x) {
    const sumResult = [...String(x)]
        .reduce((sum, curr) => sum + +curr, 0);
    
    if (x % sumResult === 0)
        return true;
    else
        return false;
}
