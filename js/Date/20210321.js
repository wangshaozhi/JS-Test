function getFoodNums() {
    let input2 = [4, 10];
    let input3 = [1, 2, 4, 5];
    let input3_ver = [...input3].sort((a, b) => a - b);
    let left = 0,
        right = input3_ver.length - 1,
        sum = 0;
    let pos = [];
    pos.push(left);
    pos.push(right);
    sum += input3_ver[left] + input3_ver[right];
    while (right > left) {
        if (sum >= input2[1]) {
            break;
        } else {
            right--;
            if (right <= left) break;
            sum += input3_ver[right];
            pos.push(right);
        }
    }
    pos = pos.sort((a, b) => a - b)
    console.log(pos);
    if (input3.reduce((sum, curr) => sum + curr) < input2[1]) return -1;
    let foodNum = pos.length;
    let res = [];
    let j = 0;
    for (let i = 0; i < input3.length && j < foodNum; i++) {
        if (input3[i] == input3_ver[pos[j]]) {
            res.push(i);
            j++;
        }
    }
    let arr = res.map(item => item + 1);
    return arr.length > 0 ? arr : -1;
}
console.log(getFoodNums());