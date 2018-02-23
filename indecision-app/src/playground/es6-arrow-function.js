const square = function(x) {
    return x * x;
};

console.log(square(4));

// const squareArrow = x => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(7));

//regular arrow function
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

//arrow function expression style
const getFirst = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Abel Acosta'));
console.log(getFirst('Joe Smith'));
