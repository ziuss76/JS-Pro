process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    const num = data.split(' ');
    const width = Number(num[0]),
        height = Number(num[1]);

    for (let i = 0; i < height; i++) {
        console.log('*'.repeat(width));
    }
});
