const obj = {
    nam: 'test',
    width: 30,
    height: 40,
    colors: {
        border: 'black',
        bg: 'red'
    },
    methodTest: function() {
        console.log("Test");
    }
};

//перебор свойств объекта и свойств объекта внутри объекта

for (let key in obj) {
    
    if (typeof(obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(`Свойство ${i} = ${obj[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} = ${obj[key]}`);
    }
}

//узнать количество свойств
//1 вариант

let counter = 0;

for (let k in obj) {
    counter++;
}

console.log(counter);

//2 вариант

console.log(Object.keys(obj));
console.log(Object.keys(obj).length);

//Вызов метода

obj.methodTest();

//Диструктуризация

let {border, bg} = obj.colors;
console.log({border, bg});
console.log(border);

let {nam, width: w, height: h} = obj;
console.log(nam);
console.log(w);
console.log(h);