//1st sum
function greetByNames(fname,sname){
    let str=`\"Welcome ${fname} and ${sname}\"`;
    return str;
}
console.log(greetByNames("Gokul", "Karthi"));

//2nd sum
function areaOfRectangle(length, breadth){
    let area=length*breadth;
    return area;
}
console.log(areaOfRectangle(10,10));

//3rd sum
function printCharacters(charc, n){
    let str="";
    for(let i=1;i<=n;i++){
        str += charc;
    }
    console.log(str);
}
printCharacters('*',8);
//4th sum
function printAllMultiplesOf5Bet(a, b) {
    let i = a;
    let str = "";
    for (i = a; i <= b; i++) {
        if(i%5 === 0) {
            str += `${i}, `;

        }
    }
    str = str.slice(0, str.length-2);
    console.log(str);
}
printAllMultiplesOf5Bet(10,30);

//5ht sum
function sumOfNEven(n) {
    let sum = 0; 
    for(let i = 1; i <= n; i++) {
        sum += (2 * i);
    }
    console.log(sum);
}
sumOfNEven(5);