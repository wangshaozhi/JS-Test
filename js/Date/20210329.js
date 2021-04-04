const obj = {
    name: 'objName'
}

document.addEventListener('click', fn.bind(obj, 'width', 'height', false));

function fn(x, y) {
    console.log(this.name, x, y);
}