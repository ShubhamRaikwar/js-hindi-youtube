const myObj = {
    js: 'javascript',
    cpp: 'C++',
    ror: 'ruby on rails',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "Java", "Cpp"]

for (const key in programming) {
    // console.log(`${programming[key]}`);
}

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'Unites states of America')
// map.set('Uk', 'United Kingdom')
// map.set('IN', 'India')

// for (const key in map) {
//     console.log(key);
// }