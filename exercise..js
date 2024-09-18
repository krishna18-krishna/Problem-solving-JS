// 1st sum
function greet() {
    console.log("Hello, World!");
  }
  greet();

// 2nd sum

function getRandomNumber(){
    return Math.random()*10;
  }
  let a=getRandomNumber();
  console.log(a);
//3rd sum
function displayGreeting(name) {
    let a="Hello," + " " + name;
    return a;
}
console.log(displayGreeting("Krish"))
displayGreeting("Krishna");
//4th sum
function calculateSquare(square){
    return square*square;
}
console.log(calculateSquare(4));
//5th sum 
function concatString(str1,str2){
  let str=str1+ " " +str2;
  return str;
}
console.log(concatString("Hello,", "krish"));
//6th sum



let cart = ["Laptop", "Mouse"]; 
cart.unshift("Monitor"); 
console.log(cart);
cart.shift(); 
console.log(cart);