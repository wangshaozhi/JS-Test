// let matterSubNum = 24;
// let arr = [];
// while (matterSubNum) {
//     arr.push(matterSubNum % 2);
//     matterSubNum = matterSubNum / 2 | 0;
// }
// let len = 5 - arr.length;
// if (arr.length < 5) {
//     for (let i = 0; i < len; i++) {
//         arr.push(0);
//     }
// }
// let resStr = arr.reverse().toString().split(',').join('');
// let res = '';
// for (let i = 0; i < resStr.length; i++) {
//     if (resStr[i] == '1') {
//         if (i == 0) {
//             res += '公共投诉';
//         } else if (i == 1) {
//             res += ',巡河';
//         } else if (i == 2) {
//             res += ',督办';
//         } else if (i == 3) {
//             res += ',抽查督导';
//         } else {
//             res += ',重大采砂';
//         }
//     }
// }
// console.log(res)

String.prototype.givePizza = () => {
    return 'give someone pizza';
}
let name = 'xiaohua';
console.log(name.givePizza()) // 字面量也会和实例对象一样，如果没有该方法时，会沿着原型链去查找