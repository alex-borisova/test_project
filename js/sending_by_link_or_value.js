// Передача по значению

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// Передача по ссылке

const obj = {
    a: 4,
    b: 3
};

const cop = obj;

cop.b = 7;

console.log(cop);
console.log(obj);

// Копирование объекта с помощью функции

function copy(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    one: 1,
    two: 2,
    c: {
        x: 7,
        y: 8
    }
};

let numCopy = copy(numbers);

numCopy.two = 5;

console.log(numCopy);
console.log(numbers);

// проверка, что копия поверхностная

numCopy.c.x = 25;

console.log(numCopy);
console.log(numbers);

// создание копии с помощью метода

let old = {
    q: 1,
    w: 2
};

let newOld = Object.assign({}, old);

console.log(newOld);

newOld.q = 2;
console.log(newOld);
console.log(old);

// создание копии массива

let oldArr = ['a', 'q', 'w'];
let newArr = oldArr.slice();

newArr[1] = 45;

console.log(newArr);
console.log(oldArr);

// spred оператор

let z = [1, 2, 3],
    x = [4, 5, 6],
    y = [...z, ...x];

console.log(y);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

log(...x);

let newY = [...y];

newY[3] = 'ggg';
console.log(newY);
console.log(y);

// spred оператор для объекта

let table = {
    w: 20,
    h: 30,
    c: 'red'
};

let newTable = {...table};
console.log(newTable);





