// 生まれた日を入力
const day = parseInt(process.argv[2])
console.log(day)

if (day % 3 === 0) {
    if(day % 4 === 0) {
        console.log('あなたは不思議な性格です')
    }
    console.log('あなたは厳しい性格です')
} else if (day % 3 === 1) {
    console.log('あなたは優しい性格です')
} else if(day % 3 === 2) {
    console.log('あなたは甘い性格です')
}