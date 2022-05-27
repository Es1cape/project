"use strict";

// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('hello');
    }
};

const John = {
    health: 100
};

John.__proto__ = soldier;

John.sayHello();

