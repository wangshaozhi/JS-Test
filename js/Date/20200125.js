const bird = {
    size: 'small'
}

const mouse = {
    name: "Mickey",
    small: true
}

console.log(mouse.bird.size);     //undefined error
console.log(mouse[bird["size"]]); // true
console.log(mouse[bird.size]);    //true