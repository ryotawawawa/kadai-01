//3秒待ってHelloと表示し、2秒待ってByeと表示する
setTimeout(() => { 
    console.log('Hello!')
    setTimeout(() => { 
        console.log('Bye!') 
    }, 2000)
 }, 3000 )
