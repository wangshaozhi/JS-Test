// let arr = [1, 2, [3, 4, 5, [6, 7]], 8, 9];

// /**
//  * 
//  * @param {Array} arr 
//  * @returns flated Array 
//  */
// function flat(arr) {
//     let res = [];
//     arr.forEach(item => {
//         if (item instanceof Array) {
//             res.push(...flat(item))
//         } else {
//             res.push(item);
//         }
//     });
//     return res;
// }

// /**
//  * 
//  * @param {Array} arr will flat Array 
//  * @returns flated array
//  */
// function flat1(arr) {
//     return arr.reduce((current, next) => {
//         if (next instanceof Array && next.length > 0) {
//             current = current.concat(flat1(next))
//         } else {
//             current.push(next);
//         }
//         return current;
//     }, [])

// }

// console.log(flat1(arr));


// /**
//  * 将多维数组扁平化处理
//  * @param {Array} arr 数组 
//  * @returns 扁平化之后的数组
//  */
// function flat(arr) {
//     let res = [];
//     arr.forEach(item => {
//         if (item instanceof Array) {
//             res.push(...flat(item));
//         } else {
//             res.push(item);
//         }
//     })
//     return res;
// }

// /**
//  * 数组扁平化处理
//  * @param {Array} arr 数组 
//  * @returns 扁平化之后的数组
//  */
// function flat1(arr) {
//     let res = arr.reduce((current, next) => {
//         if (next instanceof Array && next.length > 0) {
//             current = current.concat(flat1(next))
//         } else {
//             current.push(next);
//         }
//         return current;
//     }, [])
//     return res;
// }

// let arr = [1, 2, [3, 4, 5, [6, 7]], 8, 9];

// console.log(flat1(arr));


// function Person(name) {
//     this.name = name;
// }

// function myNew() {
//     let obj = {};
//     console.log(arguments);
//     let prototypeFn = [].shift.call(arguments);
//     obj.__proto__ = prototypeFn.prototype;
//     let res = prototypeFn.apply(obj, arguments)
//     return res instanceof Object ? res : obj;
// }

// let tom = myNew(Person, '小红');
// console.log(tom);


// function Person(name) {
//     this.name = name;
// }


// function myNew() {
//     let obj = {};
//     let proto = [].shift.call(arguments);
//     obj.__proto__ = proto.prototype;
//     let res = proto.apply(obj, arguments);
//     console.log(res);
//     return res instanceof Object ? res : obj;
// }

// let tom = myNew(Person, 'tom');
// let john = myNew(Person, 'john');
// console.log(tom, john);


// // 父类
// function supFather(name) {
//     this.name = name;
//     this.colors = ['red', 'blue', 'green']; // 复杂类型
// }
// supFather.prototype.sayName = function (age) {
//     console.log(this.name, 'age');
// };
// // 子类
// function sub(name, age) {
//     // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
//     supFather.call(this, name);
//     this.age = age;
// }
// // 重写子类的prototype，修正constructor指向
// function inheritPrototype(sonFn, fatherFn) {
//     sonFn.prototype = Object.create(fatherFn.prototype); // 继承父类的属性以及方法
//     sonFn.prototype.constructor = sonFn; // 修正constructor指向到继承的那个函数上
// }
// inheritPrototype(sub, supFather);
// sub.prototype.sayAge = function () {
//     console.log(this.age, 'foo');
// };
// // 实例化子类，可以在实例上找到属性、方法
// const instance1 = new sub("OBKoro1", 24);
// const instance2 = new sub("小明", 18);
// instance1.colors.push('black')
// console.log(instance1) // {"name":"OBKoro1","colors":["red","blue","green","black"],"age":24}
// console.log(instance2) // {"name":"小明","colors":["red","blue","green"],"age":18} 
// console.log(instance1.sayAge());
// console.log(instance2.sayAge());


// // new Object() 方式创建
// var a = {
//     rep: 'apple'
// }
// var b = new Object(a)
// console.log(b) // {rep: "apple"}
// console.log(b.__proto__) // {}
// console.log(b.rep) // {rep: "apple"}

// // Object.create() 方式创建
// var a = {
//     rep: 'apple'
// }
// var b = Object.create(a)
// console.log(b) // {}
// console.log(b.__proto__) // {rep: "apple"}
// console.log(b.rep) // {rep: "apple"}


// Object.create() 和 new Object()的区别

// let a = {
//     'color': 'red'
// }

// let b = new Object(a);
// console.log(b); // {color: "red"}
// console.log(b.__proto__); //{}
// console.log(b.color); //red

// let a1 = {
//     'color': 'red'
// };

// let b1 = Object.create(a1);
// console.log(b1);
// console.log(b1.__proto__);
// console.log(b1.prototype);

// for (let i = 0; i <= 11; i++) {
//     let quarter = ((i / 3 | 0) + 1) + "";
//     console.log(`${i+1}月是第${quarter}季度`);
// }

async function getResult() {
    console.log('hhhh');
    // return 'aaa';
}

console.log(getResult());


function Person(){
    
}