/**
 * 1 call apply bind 
 * 
 */

function fn() {
    console.log(this);
}

function fn1() {}

const obj = {
    name: 'zhangsan'
}
//不传或者null undefined this 默认是window
fn.call() // window
fn.call(null)
fn.call(undefined)

// 传的基本类型 this返回包装类型 String{"1"} Number{1} Boolean {true} 
fn.call('1') // String
fn.call(1) //Number
fn.call(true) //Boolean

//传的是函数 this返回函数的引用
fn.call(fn1) // function fn(){}

//传的是对象 this返回这个对象
fn.call(obj) // {name :'zhangsan'}