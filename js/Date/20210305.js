(() => {
    let x, y;
    try {
        throw new Error()
    } catch (x) {
        (x = 1), (y = 2)
        console.log('1',x); //1
    }
    console.log('2',x); //undefined
    console.log('3',y)  //2
})()