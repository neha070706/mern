// let arr1=[1,3,5,7,9];
// let arr2=[2,4,6,8,10];
// // console.log(arr1+ " "+arr2)

// // arr3=arr1+arr2;
// // // console.log(typeof arr3); //output as string not array
 
// // let arr4=arr1.concat(arr2);
// // // console.log(arr4); //output as array [1,3,5,7,9,2,4,6,8,10]
// // console.log(arr2.sort((a,b)=>b-a)); //descending order
// // console.log(arr2.sort((a,b)=>a-b))
// // console.log(arr2.indexOf(4)); //ascending order

// console.log(typeof arr2); //object

//typeof Result for Arrays in JavaScript

// In JavaScript, the typeof operator always returns a string describing the
//  type of its operand. However, when used on an array, it returns "object" — not "array". 
// // This is because arrays are a special kind of object in JavaScript, 
//  and the language specification defines typeof to only
// // // return one of a fixed set of strings, where "array" is not included.

//  //it will not change original array
// console.log(arr1); //original array
// // let newArr=arr1.slice(4);
// // console.log(newArr); //new array
// let splicedArr=arr1.splice(2,2); //from index 2 remove 2 elements
// console.log(arr1); //modified original array
// console.log(splicedArr); //removed elements


// let splicedArr=arr1.splice(2,2,); //from index 2 remove 2 elements
// console.log(arr1); //modified original array
// console.log(splicedArr); //removed elements

// let arr1=[1,3,5,7,9];
// let splicedArr=arr1.splice(2,2,11,13,15); //from index 2 remove 2 elements and add 11,13,15
// console.log(arr1);