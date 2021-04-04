//类型转换相关问题
var bar = true;
console.log(1, bar + 0); // 1
console.log(2, bar + "xyz");//'1xyz' 'truexyz'
console.log(3, bar + true); // 2
console.log(4, bar + false); // 1
console.log(5, '1' > bar);// false
console.log(6, 1 + '2' + false); // '120' '12false'
console.log(7, '2' + ['koala', 1]);//'2koala,1'



var obj1 = {
    a:1,
    b:2
 }
 console.log(8,'2'+obj1); // '2[object object]'

 var obj2 = {
    toString:function(){
        return 'a'
    }
}
console.log('2'+obj2) // '2a'


var b=1;
function outer(){
    var b=2;
    function inner(){
        b++;
        console.log(b);
        var b=3;
    }
    inner();
}
outer();//NaN
