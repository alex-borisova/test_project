//ошибка js со сменной значения в константе

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

//интерполяция

let category = 'toys';

console.log(`https://comedomen/${category}/3`);

//конкатенация

let str = 'sdfg',
    num = 45;

console.log(str + num);

//типы данных

console.log(typeof(null));
console.log(typeof(Infinity));
console.log(typeof(NaN));

//объект
console.log(typeof({a:1}));

//массив

let arr = [1, 2, 3];
console.log(typeof(arr));
console.log(Array.isArray(arr));

