function strArrToArr(strArr) {
    let res = strArr.replace(/"|"|\[|\]/g, '').split(',')
    return res.map(item => +item);
}

function arrToArrStr(arr) {
    let str = "[" + arr + "]";
    return str;
}

function getMaxProfitArr(arr) {
    let array = strArrToArr(arr);
    let max = Number.MIN_SAFE_INTEGER;
    let profit = 0;
    let index1 = 0,
        index2 = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length; j++) {
            profit = array[j] - array[i];
            if (profit > max) {
                max = profit;
                index1 = i;
                index2 = j;
            }
        }
    }
    if (max < 0) {
        return []
    }
    return array.slice(index1, ++index2)
}

let strArr = "[10,9,8,7,6]";
console.log(arrToArrStr(getMaxProfitArr(strArr)));



let arr = [20, 18, 29, 17, 22, 21, 30, 19];
console.log(getMaxProfitArr(arr));