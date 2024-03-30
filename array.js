// array  declaration
let obj1 = {
    name:'John',
    age:30,
    city:"New York"
};

let fruits = ['apple', 'mango', 'grapes', 'orange']

let arr = ['khushi', 1, 4, obj1, fruits];// can hold various type of data type .

// accessing elements
// console.log(arr[3].city);// output: New York

// length property
// console.log(arr.length);// output: 5

// push method - adds to end of array 
arr.push('banana');
// console.log(arr)//output : [ 'khushi', 1,  4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ],  'banana']

// pop method - removes from end of array
arr.pop();
// console.log(arr)//output : [ 'khushi', 1,  4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ] ]

// shift method
arr.shift();// remove first element
// console.log(arr);

// unshift method
arr.unshift("Rajveer");//add at beginning
// console.log(arr);// ['Rajveer', 1, 4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ] ]



/**Looping an array - like for loop or higher-order functions like forEach(), map(), filter() */

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]?.age );
// }

/**in-built methods */

//map method - Creates a new array  with the results of calling a provided function on every element in the calling array.
const newArr = arr.map((item, index, array) => {
    return {item, index, array}
});

console.log(newArr);
