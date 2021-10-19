// Задание 1:
const information = {
    city: "Krasnoznamensk",
    country: "Russia",
    population: 45000,
    stadion: true,
}
console.log(information)

// Задание 2:
const height = 40;
const width = 70;
const area = 0.5 * height * width;
console.log(area)

// Задание 3:
const time = 2;
const speedOfFirst = 95;
const speedOfSecond = 114;
const result = time * (speedOfFirst + speedOfSecond);
console.log(result);

// Задание 4:
const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
    console.log("randomNumber больше 50");
} else {
    console.log("randomNumber больше 20, и меньше 50");
}
console.log(randomNumber);

// Задание 5: 
switch (true) { 
    case randomNumber < 20: 
        console.log(`${randomNumber} меньше 20`); 
        break; 
 
    case randomNumber > 50: 
        console.log(`${randomNumber} больше 50`); 
        break; 
 
    default: 
        console.log(`${randomNumber} больше 20 и меньше 50`); 
        break; 
}