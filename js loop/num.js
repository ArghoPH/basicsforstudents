// let num = 1;
// let total = 0;
// while(num <= 50){

//     console.log(`The number is ${num}`);
//     total = total + num; 
//     console.log(`The Total Sum is ${total}`)
//     num++;
// }

// ***** Array*********

let fruits = ["Apple", "Mango", "Orange"];

console.log(fruits);

for (fruit of fruits){
    console.log(fruit);
}

let fruitss = ["Apple", "Mango", "Orange"];
let count = 1;

for (fruit of fruitss){
    console.log(`Fruit${count++} ${fruit}`);
}


for(let i = 1; i < 5; i++) {
    let stars = "";
    for (let j = 1; j <= i ; j++) {
        stars += "*"; 
    }
    console.log(stars) ;
}


let number = [1, 2, 3, 4, 5, 6, 8];
let numm = 1;

for (num of number){
    console.log(`The Number is ${num}`)
}

for (num of number){
    console.log(`Number${numm++} ${num}`)
}


for (let i = 0; i <= 10; i++){
    console.log(i)

}