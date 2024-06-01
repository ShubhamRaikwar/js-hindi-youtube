// singleton
// object.create

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Shubham",
    "full Name": "Shubham Raikwar", 
    [mySym]: "myKey1", //Tb Noted
    age: 18,
    city: "kanpur",
    email: "shubham@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]); // Intresting

// console.log(JsUser.email = "shubham@chatgpt.com"); 
// Object.freeze(JsUser);
JsUser.email = "shubham@hcl.com";
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());