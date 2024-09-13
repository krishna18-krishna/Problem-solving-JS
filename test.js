//1st sum
function classifyNumber(n){
    if(n%3==0 && n%5==0){
        return "Divisible by both 3 and 5";
    }
    else if(n%3==0){
        return "Divisible by 3";
    }
    else if(n%5==0){
        return "Divisible by 5";
    }
    else{
        return "Not divisible 3 or 5"
    }
}
console.log(classifyNumber(25));



//2nd sum
function getDayName(num){
    if(num==1){
        console.log("Sunday");
    }
    else if(num==2){
        console.log("Monday");
    }
    else if(num==3){
        console.log("Tuesday");
    }
    else if(num==4){
        console.log("Wednesday");
    }
    else if(num==5){
        console.log("Thursday");
    }
    else if(num==6){
        console.log("Friday");
    }
    else if(num==7){
        console.log("Saturday");
    }
    else{
        console.log("Invalid Day")
    }
}
getDayName(3)



//3rd sum
function printMultiplicationTable(n,r){
    for(let i=0;i<=n;i++){
        let s=n*r;
        console.log(n+" * "+r+" = "+s);
        r--;
    }
}
printMultiplicationTable(5,6);