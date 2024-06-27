const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})


new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Chai', email:'chai@example.com'})
    }, 1000)   
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username: "Shubham", password: 123})
        } else {
            reject('ERROR: Something went wrong')
        }
    } , 1000)
})

 promiseFour
    .then((user) => {
    console.log(user);
    return user.username
}).then((myusername) => {
    console.log(myusername);
})
.catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive =  new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({username: "Javacript", password: 123})
        } else {
            reject('ERROR: JS went wrong')
        }
    } , 1000)
})

async function consumePromiseFive() {
   try {
    const response  = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    // console.log(response);
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))