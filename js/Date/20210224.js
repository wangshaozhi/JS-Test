const a = {}
const b = {
    'key': "b"
}
const c = {
    'key': "c"
}

a[b] = 123;
console.log(a)
a[c] = 456;
console.log(a[b]) // 456