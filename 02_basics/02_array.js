const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes.length);
// console.log(typeof marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroesArray = marvel_heroes.concat(dc_heroes);
// console.log(allHeroesArray);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Shubham"));
// console.log(Array.from("Shubham"));
// console.log(Array.from({name: "Shubham"}));  // Intresting thing to note

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));