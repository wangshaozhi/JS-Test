// // /**
// //  * 手写实现new函数
// //  */
// // function myNew() {
// //     let obj = {};
// //     //借用arguments的shift方法来获取arguments的第一个参数
// //     let constrFn = [].shift.call(arguments);
// //     obj.__proto__ = constrFn.prototype;
// //     constrFn.apply(obj, arguments);
// //     return obj;
// // }

// // function Person(name) {
// //     this.name = name;
// // }

// // let tom = new Person('tom');
// // let john = myNew(Person, 'john');
// // console.log(tom, john);


// /**
//  * 
//  */
// function insertSort(arr) {
//     let temp = 0;
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 temp = arr[j - 1];
//                 arr[j - 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let arr = [6, 5, 4, 3, 2, 1]

// console.log(insertSort(arr));


// let a = 10,
//     b = 20;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

for (var i = 0; i < 5; i++) {
    setTimeout((function (j) {
        console.log(j);
    })(i), 1000)
}

let str = '00000000000000000000000000001011';
let strArr = Array.from(str);
console.log(strArr);