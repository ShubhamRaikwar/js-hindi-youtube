// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`Db Connected`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} ) ('Shubham')