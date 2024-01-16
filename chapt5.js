let arr = [1,2,3,4,5];
let a =  prompt("Enter number : ");
    a = Number.parseInt(a);
    arr.push(a);
while(a != 0) {
   a =  prompt("Enter number : ");
    a = Number.parseInt(a);
    arr.push(a);
}
console.log(arr);
let n = arr.filter((x) => {
    return x%2 == 0;
})
console.log(n);
