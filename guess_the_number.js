let x = Math.random()*100;
x = Number.parseInt(x);
let b = x;
let count = 0;
let c;
let guesses;
do{
    c = prompt("Enter number you guessed : ");
    c = Number.parseInt(c);
    if(c > b) {
        console.log("Hint : Enter a smaller number!");
    }
    else if(c<b){
        console.log("Hint : Enter a larger number!");
    }
    count++;
    guesses++;
    if(c == b && guesses<100)
    break;
}while(c != b);
console.log("Your score is ",count);
