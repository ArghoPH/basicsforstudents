const sentense = "I want to become a web developer";

// const = result '.veD beW a emoceB ot tnaw I';

// s

let reverse = ""
for (const letter of sentense) {
    // console.log(letter);
    reverse = letter + reverse;
}

console.log(reverse)

for (let i = 0; i < sentense.length; i++) {
    console.log(i);
    console.log(sentense[i]);
}