try{
    const str1= "abc"
    JSON.parse(str1)
} catch(error) {
    console.error(error)
  //
}

try{
    const str2= "'abc'"
    JSON.parse(str2)
}catch(error) {
    console.error(error)
 //
}

try{
    const str3='"abc"'
    JSON.parse(str3)
}catch(error) {
    console.error(error)
//
}

try{
    const str4='{"a":undefined}'
    JSON.parse(str4)
}catch(error) {
    console.error(error)
//
}

try{
    const str5='{"a": 123}'
    JSON.parse(str5)
}catch(error) {
    console.error(error)
//
}

try{
    const str6='{a: 123}'
    JSON.parse(str6)
}catch(error) {
    console.error(error)
//Jsonのキーは””で囲まなければならないため
}

try{
    const str7='{"func":()=>console.log("Hi!")}'
    JSON.parse(str7)
}catch(error) {
    console.error(error)
//
}