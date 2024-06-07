//  for of

["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log(`Space Detected`);
        break
    }
    // console.log(`Each character is: ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'Unites states of America')
map.set('Uk', 'United Kingdom')
map.set('IN', 'India')

// console.log(map);
// console.log(map.get('IN'));

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObj = {
    game1 : 'NFS',
    game2 : 'EA Sports Cricket',
    game3 : 'Freedom Fighter',
}

// Not iterable now watch in four.js file
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }