function test(a) {
    a = 3
}
var a = 4
test(a)
console.log(a)
// 4 变量提升

var o = {
    user: 'aaa',
    fn: function () {
        console.log(this.user);
    }
}
o.fn() // aaa
window.o.fn() //aaa 
var c = o.fn 
c() //undefined


