"use strict";

// let num = 20;

// function showFirstMessage (text){
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('ya twoi rot shatal');

// function calc (a, b){
//     return (a + b);
// }

// console.log(calc(4, 3));

// const helo = function (){
//     console.log('Hello world');
// };
// helo();

// const calcu = (a, b) => {
//     console.log('Hello world');
// };

// const test = 'testTestTEST';

// console.log(test[5]);
// console.log(test.toLocaleUpperCase());
// console.log(test.toLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("f"));
  
// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6,11));
// console.log(logg.substr(6,5));

// const num = 12.6;

// console.log(Math.round(num));
 
// const testScreen = "12.6px";

// console.log(parseInt(testScreen));
// console.log(parseFloat(testScreen));

// function first (){
//     //do something
//     setTimeout(function(){
//         console.log(1);
//     }, 5000 );
// }

// function second (){
//     console.log(2);
// }

// first();
// second();

// function voiceCallBack (num, callback){
//     callback();
//     console.log(num);
    
// }

// function testCallBack (){
//     console.log(2);
// }

// voiceCallBack(27, testCallBack);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('test');
//     }
// }; 

// options.makeTest();

// const {bg, border} = options.colors; // Деструктуризация
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);
// delete options.colors.border;
// console.log(options);
// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${key} имеет свойство ${i} у которого значение ${options[key][i]}`);
//             //counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// let [firstName, lastName] = ['Demian', 'Chernov'];
// console.log(firstName);
// console.log(lastName);

// const arr = [15, 28, 106, 1, 3, 6, 10, 4, 7];

// arr.forEach(function(item, i, arr){
//     console.log(`${item} под индексом ${i} в массиве ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// arr.sort(compareNum);

// function compareNum (a, b){
//     return a - b;
// }

// function clone (objectMain){
//     let copy = {};

//     for (let key in objectMain){
//         copy[key] = objectMain[key]; 
//     }
//     return copy;
// }

// const numbers = {
//     a: 1,
//     b: 2,
//     c: 46,
//     d: {
//         z: 146,
//         x: 17
//     },
//     f: 228
// };

// const newArr = clone(arr);

// newArr[1] = 228;

// console.log(typeof(newArr));

// console.log(typeof(arr));

// const newNumbers = clone(numbers);
// newNumbers.a = 27;
// newNumbers.d.z = 22282;
// console.log(numbers);
// console.log(newNumbers);
// console.log(products.join('; '));

//arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i =0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// const add = {
//     g: 2098,
//     h: 123456
// };

// let yes = Object.assign(newNumbers, add); // можно поставить {} вместо любого аргумента чтобы клонировать поверхностные значения

// console.log(yes);

const video = ['youtube', 'rutube', 'vimeo'],
      internet = ['google', 'yandex', 'yahoo'],
      all = [...video, ...internet, 'VK', 'facebook'];

// console.log(all);

function show(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

show(...video);

const newObj = {
    one: 1,
    two: 2
};

const arr = [1, 2, 3, 4, 5, 56];

const newSObj = {...arr};

// console.log(newSObj); 
