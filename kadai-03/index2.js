//丸写ししてください
const max = parseInt(process.argv[2])

//7の倍数のときに特別なメッセージを出力する
for(let n=1; n < max + 1; n = n + 1){
    if(n% 7===0){
        console.log('君のハートにレボリューション！！')
    }else{
        console.log(n)
    }
}