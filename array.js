// array  declaration
// let obj1 = {
//     name: 'John',
//     age: 30,
//     city: "New York"
// };

// let fruits = ['apple', 'mango', 'grapes', 'orange']

// let arr = ['khushi', 1, 4, obj1, fruits];// can hold various type of data type .

// accessing elements
// console.log(arr[3].city);// output: New York

// length property
// console.log(arr.length);// output: 5

// push method - adds to end of array 
// arr.push('banana');
// console.log(arr)//output : [ 'khushi', 1,  4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ],  'banana']

// pop method - removes from end of array
// arr.pop();
// console.log(arr)//output : [ 'khushi', 1,  4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ] ]

// shift method
// arr.shift();// remove first element
// console.log(arr);

// unshift method
// arr.unshift("Rajveer");//add at beginning
// console.log(arr);// ['Rajveer', 1, 4, { name: 'John', age: 30, city: 'New York' }, [ 'apple', 'mango', 'grapes', 'orange' ] ]



/**Looping an array - like for loop or higher-order functions like forEach(), map(), filter() */

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]?.age );
// }

/**in-built methods */

//map method - Creates a new array  with the results of calling a provided function on every element in the calling array.
// const newArr = arr.map((item, index, array) => {
//     return {item, index, array}
// });

// console.log(newArr);


// filter method - Creates a new array with all elements that pass the test implemented by the provided function.
// const result =  arr.filter((item, index, array) => {
//     return item > 3
// } );

// console.log(result);

const numbers = [1, 2, 3, 4, 4, 5]

// reduce method - : Executes a reducer function on each element of the array, resulting in a single output value.
// const sum = numbers.reduce((callbackfn, currentValue) => {
//     // Return the accumulated value previous returned in     the last call plus the currentValue. If a currentValue is not provided, it is treated as
//    return callbackfn += currentValue;
// }, 3);

// console.log(sum);


// some method - Tests whether at least one element in the array passes the test implemented by the provided function.
// const result =  arr.some((item) => {
//     return item > 3
// } );
// console.log(result);// true

// every method - Tests whether all elements in the array pass the test implemented by the provided function.
// const result =  number.every((item) => {
//     return item > 3
// } );
// console.log(result);// false

// find method - return the first element in an array that satisfies a provided testing function.
// const result =  numbers.find((item) => {
//     return item > 3
// } );
// console.log(result);// 4

// const num1 = [1,2,3,4,5]
// const num2 = [6,5,4,9,8,7,0]

// concate method - 
// const newNum = num1.concat(num2);
// console.log(newNum);

// slice method - Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array.
// const newArray = arr.slice(2, 4);// slice(startIndex , n-1)
// console.log(newArray);

//splice
// arr.splice(1,2, "banana")// splice(index, deleteCount , newItem)
// console.log(arr);

// fill
// const dummy = [2,5,1,6,];
// dummy.fill("X");// fill(start , value)
// console.log(dummy);//output: ['X', 'X', 'X', 'X']

// flat method
// const nestedArray = [1,[2,3], [6, [7], 5]];// output : [1,2,3,4,6,7,5]
// const flattenedArray = nestedArray.flat(); // flat(n) - how many levels of nesting should be flattened. By default it’s
// console.log(flattenedArray);

// reverse method
// numbers.reverse();
// console.log(numbers);

// sort method
// numbers.sort((a,b) => {a -b})
// console.log(numbers);



/**Que.1    -   second largest number
 * 
 * given an array arr of size N, print second largest 
 * distinct element from an array
 * 
 * input : [12, 35, 1, 10, 34, 1]----------->output: 34
 * input : [10, 5, 10]----------->output: 5
*/

// solution 1
function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr));// O(n) time complexity
    uniqueArr.sort((a, b) => b - a);// O(nlogn) time complexity
    if (uniqueArr.length >= 2) {
        return uniqueArr[1];
    }
    else {
        return -1
    }
}

// console.log(secondLargest([10, 5, 10]));
// time complexity of  this function is O(nlogn) because we are sorting the array and then finding the second largest element which takes O(n) time but


// solution 2 
function secondlargestOptimized(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {//O(n)
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

// console.log(secondlargestOptimized([12, 35, 1, 10, 34, 1]));
// time complexity of this function is O(n) and space complexity is also O(1).


/**Que.2    -   Rotate array by K
 * Given an integer array nums, rotate the array to the right by k steps,
 * where K is non - negative
 * 
 * input: [1,2,3,4,5,6,7], K =3 ------------>output: [5,6,7,1,2,3,4]
 * input: [-1,-100,3,99], K =2 ------------>output: [3,99,-1, -100]
 */



// solution 1

function rotateByK(nums, k) {
    let size = nums.length;


    if (size > k) {
        k = k % size; // If K is greater than Size then we need to find out the remainder when K is divided by Size.
    }

    const rotated = nums.splice(size - k, size);// O(n)
    nums.unshift(...rotated);//O(n)

    return nums;
}
// console.log(rotateByK([1,2,3,4,5,6,7], 3));
// time complexity  of this function is O(n) because we are using splice() method which takes O(n) time in worst case scenario.


// solution 2 
function rotateArrayOptimized(arr, k) {
    let size = arr.length;


    if (size > k) {
        k = k % size; // If K is greater than Size then we need to find out the remainder when K is divided by Size.
    }
    reversed(arr, 0, size - 1);// O(n)
    reversed(arr, 0, k - 1);// O(k)
    reversed(arr, k, size - 1);// O(n-k)

    return arr;
}

//time complexity  : O(n), space complexity :  O(1)

// 1,2,3,4,5
function reversed(nums, left, right) {// 
    while (left < right) {
        const temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp;
    }
}
/**Dry run above
 * nums =[1,2,3,4,5], left = 0th index, right = length - 1 index
 * temp = nums[0] ---> 1
 * nums[0] = nums[4] --> 5
 * nums[4] = 1 --> 1
 * now nums = [5,2,3,4,1]
 * temp = nums[1] ---> 2 
 * nums[1] = nums[3] --> 4
 * nums[3] = 2 --> 2
 * now nums = [5,4,3,2,1]
 */


// console.log(rotateArrayOptimized([1,2,3,4,5,6,7], 3));

/**Que.3    -  Remove Duplicated from shorted array
 * given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * the relative order of the element should be kept the same . then return the unique elements in nums.
 * 
 * input: [1,1,2] ------------>output: 2, [1,2, ],
 * input: [0,0,1,1,1,2,2,3,3,4] ------------>output: 5, [0,1,2,3,4, , , , , ]
 */


// solution 1
function removeDuplicates(nums) {
    for (let i = 0; i < nums.length; i++) {// O(n)
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);//O(1)
            i--;
        }
    }
    return nums.length;
}

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// time complexity  : O(n), space complexity :  O(1)

// solution 2 - without js in-built methods

function removeDuplicateNew(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}


console.log(removeDuplicateNew([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// time complexity  : O(n), space complexity :  O(1)