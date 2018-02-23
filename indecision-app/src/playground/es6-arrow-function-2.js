//arguements object - no longer bound with arrow functions
const add = (a, b) => {
    //console.log(arguements);
    return a + b;
};

console.log(add(55, 1));

// this keyword is no longer bound

// const user = {
//     name: 'Abel',
//     cities: ['Katy', 'Houston', 'Seattle'],
//     //if you change this function to arrow, this will not work
//     printPlacesLived: function() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };

const user = {
    name: 'Abel',
    cities: ['Katy', 'Houston', 'Seattle'],
    //new syntax for defining method in es6
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 6,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());
