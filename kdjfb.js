function removeLast2Chars(str){
    str=str.slice(0,-2);
    return str;
 }
 console.log(removeLast2Chars("Hello World!"));



 //for loop
 //1st sum
 function firstOddNumber(n){
    for(let i=1 ; i <= n ;i+=2){
        console.log(i);
        n++
    }
 }
firstOddNumber(5);
// 2nd sum

function multiples(num){
    let table=3;
    for(let i=3;i<=num;i+2){
        console.log(i)
    }
}
multiples(5);