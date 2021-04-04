// console.log('true + false ', true + false); //1
// console.log(`12 / "6"`, 12 / "6"); // 2
// console.log(`15 + 3 + 'number'`, 15 + 3 + 'number'); // '18number'
// console.log(`[1] > null`, [1] > null); // true 1 > 0
// console.log(`'foo' + + 'bar'`, 'foo' + +'bar'); // 'fooNaN'
// console.log(`'true' == true`, 'true' == true); // false
// console.log(`false == 'false'`, false == 'false'); //false
// console.log(`null == ''`, null == ''); //false null == 0 
// console.log(`!!'false'==!!'true'`, !!'false' == !!'true'); //true
// console.log(`['x']=='x'`, ['x'] == 'x'); // true
// console.log(`[] + null + 1`, [] + null + 1); // '' + null + 1 'null1'
// console.log(`[1,2,3]==[1,2,3]`, [1, 2, 3] == [1, 2, 3]); //false
// console.log(`{} + [] + {} + [1]`, {} + [] + {} + [1]); //'0[Object Object]1'
// console.log(`! + [] + [] + ![]`, !+[] + [] + ![]); //'truefalse'
// console.log(`new Date(0) - 0`, new Date(0) - 0); //0
// console.log(`new Date(0) + 0`, new Date(0) + 0); // '"Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)0"'


// let obj = {
//     value: 1
// }

// function fn(name, age) {
//     return {
//         value: this.value,
//         name,
//         age
//     }
// }

// console.log(fn.call(obj, '张三', 18));

/**
 * var 定义的变量会挂载到window对象上面
 * 1 普通函数中的this 指向window 
 */
let name = 'globalName';

let fn1 = function () {
    return this.name;
}

console.log(fn1());

/**
 * 2 对象中的this 指向对象
 * 对象中方法的this 指向 global
 * 使用'use strict' this指向undefined
 */

let obj = {
    name: "objName",
    fn() {
        'use strict'
        console.log(this);
        console.log(this === obj)
        // console.log(this.name);
    }
}
// console.log(obj.fn());

let fnCopy = obj.fn;
fnCopy()

// window.id = 'gloabalName';
// let divObj = document.getElementById('div1');
// divObj.onclick = function () {
//     console.log(this.id);
//     let that = this;
//     var callback = function () {
//         console.log(that.id);
//     }
//     callback()
// }

/**
 * 3 构造函数中的this 指向返回的实例对象
 */

// function Person(name) {
//     this.name = name;
//     // console.log(this);
//     // return {
//     //     name: "zhangsan"
//     // }
//     return 'zhangsan';
// }

// let tom = new Person('tom');
// console.log(tom);
// console.log(tom.name);

function Person(name) {
    this.name = name;
}


function myNew() {
    let obj = {};
    let cons = [].shift.call(arguments);
    obj.__proto__ = cons.prototype;
    let res = cons.apply(obj, arguments);
    return res instanceof Object ? res : obj
}
/**
 * 4 Function.prototype.call 或 Function.prototype.apply动态改变this指向
 * substituting 取代
 */

let obj1 = {
    name: "obj1Name",
    fn: function (gender, age) {
        console.log(Array.prototype.slice.call(arguments));
        console.log(this.name + gender + age);
    }
}

let obj2 = {
    name: 'obj2Name'
}

// console.log(obj1.fn());
console.log(obj1.fn.call(obj2, '男', 18));

/**
 * 5 丢失的this
 */