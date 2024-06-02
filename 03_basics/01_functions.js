function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2); 
// }

// addTwoNumbers(3, null);  //Intersting

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Shubham");
    // return result; 
    return number1 + number2;
 }

const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shubham Raikwar")); 
// console.log(loginUserMessage("Shubham")); 

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "Shubham",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

handleObject({
    username: "Sam",
    price: 299
})

// ++++++++++++++++++ Array +++++++++++++++++++++++++++++++++

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));