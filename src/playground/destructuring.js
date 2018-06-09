//
// Object Destructuring
//

// console.log('destructuring');
// const person = {
//     // name: 'Yann',
//     age: 31,
//     location: {
//         city: 'Paris',
//         temp: 19
//     }
// };

// const { name: firstname = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature)
//     console.log(`It's ${temperature} in ${city}.`);



// const book = {
//     title: 'Ego is the ennemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`${publisherName}`);



//
// Array Destructuting
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York',] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice, ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
