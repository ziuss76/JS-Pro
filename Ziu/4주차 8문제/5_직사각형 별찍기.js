process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i = 0; i < b; i++){
        console.log('*'.repeat(a))
    }
});
// return 이 아니라 console.log 로 답 제출하라고 해야지 하진짜
