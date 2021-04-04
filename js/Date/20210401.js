// let n = readInt(),
//     m = readInt(),
//     k = readInt();

let n = 2,
    m = 3,
    k = 4;
let arr = [];
for (let i = 1; i <= n; i++) {
    let subArr = []
    for (let j = 1; j <= m; j++) {
        subArr.push(i * j);
    }
    arr.push(subArr);
}

function flat(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!(typeof item == 'number')) {
            res.push(...flat(item));
        } else {
            res.push(item);
        }
    }
    return res;
}

let newArr = flat(arr);
let resArr = newArr.sort((a, b) => a - b);
console.log(resArr[k - 1]);



let n = readInt(),
    m = readInt(),
    k = readInt();

let arr = [];
for (let i = 1; i <= n; i++) {
    let subArr = []
    for (let j = 1; j <= m; j++) {
        subArr.push(i * j);
    }
    arr.push(subArr);
}

function flat(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (!(typeof item == 'number')) {
            res.push(...flat(item));
        } else {
            res.push(item);
        }
    }
    return res;
}

let newArr = flat(arr);
let resArr = newArr.sort((a, b) => a - b);
console.log(resArr[k - 1]);

/**
 * start  return num++的小坑
 */
let num = 10;

function getA(a) {
    return a++;
}


let num1 = getA(10)
let getNum = num => num++;
console.log(num1, getNum(num1));

/**
 * end return num++的小坑
 */

console.log(Array.from('hello'));
/**
 * 约德尔测试 start 
 */
let source = read_line().trim();
let target = read_line().trim();
let reg = /[0-9a-zA-Z]/;
let same = 0,
    length = target.length;
for (let i = 0; i < length; i++) {
    if (reg.test(source[i])) {
        if (target[i] === '1') {
            same++;
        }
    } else {
        if (target[i] === '0') {
            same++;
        }
    }
}
console.log(Math.round((100 * (same / lenght) * 100)) / 100 + "%")

let source = read_line().trim();
let target = read_line().trim();
let same = 0,
    result = '';

for (let i = 0; i < source.length; i++) {
    if (/[0-9a-zA-Z]/.test(source[i])) {
        if (target[i] == '1') {
            same++;
        }
    } else {
        if (target[i] == '0') {
            same++;
        }
    }
}
//这句有问题
console.log((100 * same / target.length).toFixed(2) + '%')

let source = read_line().trim();
let target = read_line().trim();

function compare(source, target) {
    let reg = /[0-9a-zA-Z]/;
    let newSource = Array.from(source);
    let str = ''
    newSource.forEach(item => {
        if (reg.test(item)) {
            str += '1';
        } else {
            str += '0';
        }
    })
    let sameNum = 0,
        lenght = str.length;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target[i]) {
            sameNum++;
        }
    }
    console.log((100 * sameNum / target.length).toFixed(2) + '%')
}


compare(source, target);

let reg = /\d|\w/;
let reg1 = /\d|[a-zA-Z]/;
let reg2 = /[0-9a-zA-Z]/;
let regArr = [reg, reg1, reg2];
let str = '*814cCRz>6qyasM"J,*v83=&^l1ZXczxO[v9-##RB5*/]hd=>J4@'
let strArr = [];
for (let j = 0; j < regArr.length; j++) {
    let str1 = '';
    for (let i = 0; i < str.length; i++) {
        if (regArr[j].test(str[i])) {
            str1 += '1';
        } else {
            str1 += '0';
        }
    }
    strArr.push(str1)
}
console.log(strArr);
/**
 * 约德尔测试 end
 */

/**
 * 跳跃的蚂蚱 start
 */
let x = null;
while ((x = readInt() != null)) {
    print(getMinSetp(x))
}

/**
 * 
 * @param {Number} x 
 */
function getMinSetp(x) {
    let location = 0,
        step = 0;
    x = Math.abs(x);
    while (location !== x) {
        if (location < x) {
            location += step;
        } else if (location > x) {
            location -= step;
        }
        if (location === x) {
            break;
        }
        step++;
    }
}

/**
 * 跳跃的蚂蚱 end
 */

let array = []
console.log(readInt())
//while(read_line()!=null){
//    print(read_line())
//}

function getSum(n, m) {
    let sum = 0;
    for (let i = 0; i < m; i++) {
        sum += n;
        n = Math.sqrt(n);
    }
    return sum.fixed(2);
}

//  import java.util.Scanner;

// public class Main {
//     public static void main(String[] args){
//         Scanner sc  = new Scanner(System.in);
//         while(sc.nextInt()!=null){
//             int n = sc.nextInt();
//             int m = sc.nextInt();
//             System.out.println(getSum(n,m));
//         }
//     }

//     public static double getSum(n,m){
//         double sum = 0.0;
//         for(int i=0;i<m;i++){
//             sum+= n;
//             n= Math.sqrt(n);
//         }
//         sum =(double) Math.round((sum*100)/100);
//         return sum;
//     }
// }



// let m = null,
//     n = null;
// while ((n = readInt()) != null && (m = readInt()) != null) {
//     print(getSum(n, m));
// }

// function getSum(n, m) {
//     let sum = 0;
//     for (let i = 0; i < m; i++) {
//         sum += n;
//         n = Math.sqrt(n);
//     }
//     return sum.toFixed(2);
// }


// var line;
// var solveMeFirst = (a,b) => a+b;
// while((line = read_line()) != ''){
//     let arr = line.split(' ');
//     let a = parseInt(arr[0]);
//     let b = parseInt(arr[1]);
//     let c = solveMeFirst(a, b);
//     print(c);
// }


let obj = {
    name: 'zhangsan',
    age: 18,
    subObj: {
        name: 'child'
    }
}

let newObj = {
    ...obj
};
newObj.name = '李四';
console.log(obj, newObj);
newObj.subObj.name = '李四';
console.log(obj, newObj);

let obj = {}
let arr = [1, 2, 3]
console.log(arr instanceof Array);
console.log(Array.isArray(arr));
console.log((Object.prototype.toString.call(arr) == '[object Array]'))


// Object.prototype.toString = function(){return '111'}
var arr = [1, 2, 3]
console.log(Object.prototype.toString.call(arr) == "[object Array]");

// Array.isArray(arr)

console.log(arr.__proto__.constructor == Array)



const value = {
    number: 10
}

const multi = function (x = {
    ...value
}) {
    return x.number *= 2
};

console.log(1, multi());
console.log(2, multi());
console.log(3, multi(value));
console.log(4, multi(value));


function move({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move({x: 3, y: 8}));
console.log(move({x: 3})); 
console.log(move({})); 
console.log(move()); 