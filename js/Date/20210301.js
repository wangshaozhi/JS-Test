function sayhi() {
    return (() => 0)();
}

console.log(typeof sayhi()) //'number'