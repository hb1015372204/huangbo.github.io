prototype 面向对象机制，是一个全局户型，可以向对象添加属性和方法， object.prototype.xxx = xxx;

typeof和instanceof的区别：
typeof: 判断数据类型，无法判断array和object；
        返回值6个字符串：string、boolean、number、function、object、undefined；
        在判断null、array、object时，都只能返回字符串object,因此可以使用instanceof
instanceof:不同的对象实例进行判断，返回布尔值

JS数据类型：
    基本类型（单类型）： String、Number、boolean、null、undefined
    引用类型：object  包含的 function、Array、Date

https://github.com/mqyqingfeng/Blog
JS深入从原型到原型链
https://github.com/mqyqingfeng/Blog/raw/master/Images/prototype1.png
原型：每个js对象(null除外)在创建时就会关联另一个对象，这个对象就是原型，每一个对象都会从原型“继承”属性；对象.prototype
每个js对象都有一个属性 _proto_ ，改属性指向对象的原型
每个原型都有一个constructor属性指向关联的构造函数

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```

