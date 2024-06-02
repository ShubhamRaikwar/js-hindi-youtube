// var c = 700
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // c = 30;    

    // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "shubham"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Shubham"
    if (username === "Shubham") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++ Intresting +++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

// +++++++++++ Intresting ++++++++++++++++++++++
addTwo(5);

const addTwo = function(num){
    return num + 2;
}
