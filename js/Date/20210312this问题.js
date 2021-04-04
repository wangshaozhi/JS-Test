 /**
  * 1 默认情况下，this是指向全局对象window
  */
 function f() {
     console.log(this);
 }
 f();
 /**
  * 2 方法作为对象的一个属性，对象进行方法调用时,方法内部的this指向对象
  */
 let message = 'outter Hello World!'
 const obj = {
     message: 'obj Hello World!',
     sayHi() {
         console.log('当前this值', this);
         const message = 'inner Hello World!'
         return this.message;
     }
 }
 console.log(obj.sayHi());
 /**
  * 3 构造函数中的this问题
  * 1) 如果把构造函数当做普通函数来调用，则this为全局对象window
  * 2) 如果把构造函数当做构造函数来使用，则this为当前构造函数
  * 3) 如果构造函数中方法是用箭头函数表达式来声明，则箭头函数中的this为构造函数的this
  * @param {String} name 宠物名称 
  */
 function Pet(name) {
     this.name = name;
     this.getName = () => {
         return 'Hello ' + this.name;
     }
     console.log(this);
 }
 const cat = new Pet('Kitty');
 let {
     getName
 } = cat;
 console.log(cat.getName());
 console.log(getName());

 function AAA() {
     let obj = {};
     let constructorFunc = [].shift.call(arguments);
     obj.__proto__ = constructorFunc.prototype;
     let res = constructorFunc.apply(obj, arguments);
     return res instanceof Object ? res : obj;
 }

 function Person(name = '你的名字') {
     this.name = name;
 }
 console.log(AAA(Person, '老李'));
 /**
  * 3 延迟打招呼
  */
 const object = {
     message: 'Hello World!',
     loadMessage() {
         console.log(this.message);
     }
 }

 setTimeout(object.loadMessage, 1000);