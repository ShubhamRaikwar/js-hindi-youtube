// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstName: "Shubham",
            lastName: "Raikwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "s@email.com"
    },
    {
        id: 2,
        email: "r@email.com"
    },
    {
        id: 3,
        email: "rock@email.com"
    }
]

// console.log(users[0].email); 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Intresting
// console.log(Object.values(tinderUser)); // Intresting
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Intresting

const course = {
    coursename: "JS in Hindi",
    price: 999,
    courseInstructor: "Shubham R"
}

// console.log(course);
// console.log(course.courseInstructor); 

const {courseInstructor: instructor} = course // Intresting

// console.log(courseInstructor);
console.log(instructor);

// JSON type

// {
//     "name": "Shubham",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }