console.log("I'm chaining yo");

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let chainMeToTheKeyboard = integers.sort((a,b)=>{return b-a}).filter((aboveNineteen) => {return aboveNineteen > 19}).map((aboveNineteen) =>{return (aboveNineteen * 1.5)-1}).reduce((prev, curr) =>{return prev + curr});

console.log("All Chained Up", chainMeToTheKeyboard);



