let arr = [1, 2, 3, 4];

//Перебор элементов
//1 способ

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//2 способ

for (let value of arr) {
    console.log(value);
}

//Свойство lenght

// arr[99] = 0;    
// console.log(arr.length);
// console.log(arr);

//3 способ

arr.forEach(function (item, i, arr) {
    console.log(`${item}: ${i} внутри массива ${arr}`);
});


//Сортировка

let arr2 = [2, 13, 8, 37, 0, 10];
arr2.sort();

console.log(arr2);

function compareNum(a, b) {
    return a - b;
}

arr2.sort(compareNum);
console.log(arr2);


