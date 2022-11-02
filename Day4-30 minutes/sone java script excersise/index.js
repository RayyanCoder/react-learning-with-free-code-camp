const numbers = [1,2,3,4,5,6,7,8,9,10];

const newArray = numbers.map(number =>{
    return number *number;
});
console.log(newArray);

const nameArray = ['rayyan','faizan','tabish','abdul rehman'];
const newName = nameArray.map(name=>{
    
    return name[0].toUpperCase()+name.slice(1,name.length); 
});

console.log(newName);

const carsArray = ['lumborgani','ferrari','buggati','suzuki','swift'];

const carsNewArray = carsArray.map(car =>{
    return `<p>${car}</p>`;
});

console.log(carsNewArray);