// let word = 'abcdefghijklmnopqrstuvwxyz';
// console.log(word.length);

// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let inputs = [];
// let index = 0;
// let count = 0;
// let j = 0;

// function repeat(src, n) {
//     return (new Array(n + 1)).join(src);
// }
// rl.on('line', function (line) {
//     inputs.push(line.trim())
//     if (++index == 2) {
//         console.log(inputs)
//         let word = inputs[0];
//         let target = inputs[1];
//         word = repeat(word, target.length);
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] == target[j]) {
//                 j++;
//                 count++;
//                 if (count == target.length) {
//                     console.log(i - target.length + 1);
//                     break;
//                 }
//             }
//         }
//     }
// });


// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let inputs = [];
// let count = 0;
// let j = 0;
// rl.on('line', line => {
//     inputs.push(line);
//     if (++count == 3) {
//         console.log(inputs);
//         let first = inputs[0].split(' ');
//         let n = first[0];
//         let m = first[1];
//         let A = inputs[1].split(' ').map(item => +item);
//         let B = inputs[2].split(' ').map(item => +item);
//         let x = 0;
//         while (x >= 0) {
//             for (let i = 0; i < A.length; i++) {
//                 A[i] = (A[i] + x) % m;
//             }

//             A.forEach((item, index) => {
//                 if (item == B[index]) {
//                     j++;
//                 }
//             })
//             if (j == n) {
//                 console.log(x);
//                 return;
//             }
//             x++;
//         }
//         rl.close();
//     }
// })


//定义一个数组，找出数组中有该字符串
const names = ["json","张三","李四"]
//引入 nodejs 中的readline模块
const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("enter a name to search l",name=>{
    var position = names.indexOf(name);
    console.log(position);
    if(position==-1){
        console.log(`${name} is not found`)
    }else{
        console.log(`${name} is in position ${position}` )
    }
    readline.close()  //关闭输入流
})