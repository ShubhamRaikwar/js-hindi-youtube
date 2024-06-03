const user = {
    username: "Shubham",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Shubham"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Shubham"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Shubham"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "Shubham"})

console.log(addTwo(4, 7))