// async function hello() {
//     console.log('Hello World!');
//     // return 'Hello World!';
// }

// console.log(hello());

// let promise = new Promise(timeStart);
// promise.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// function timeStart(resolve, reject) {
//     setTimeout(() => {
//         resolve('一秒之后打印了这句话');
//     }, 1000);
//     // reject('失败了！')
// }

// function step1(time) {
//     alert('a')
// }

// function step2(time) {

// }

// function step3(time) {

// }

// function callback() {
//     console.log('done');
//     console.timeEnd('timer');
// }
// console.time('timer');
// console.log('before setTimeout');
// setTimeout(callback, 1000);
// console.log('after setTimeout');

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
    console.log(this);
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    switch (carType) {
        case 1:
            if (this.big <= 0) return false;
            this.big--;
            break;
        case 2:
            if (this.medium <= 0) return false;
            this.medium--;
            break;
        case 3:
            if (this.small <= 0) return false;
            this.small--;
            break;
        default:
            break;
    }
    return true;
};

let parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // 返回 true ，因为有 1 个空的大车位
parkingSystem.addCar(2); // 返回 true ，因为有 1 个空的中车位
parkingSystem.addCar(3); // 返回 false ，因为没有空的小车位
parkingSystem.addCar(1); // 返回 false ，因为没有空的大车位，唯一一个大车位已经被占据了
console.log(parkingSystem);