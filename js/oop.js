const soldier = {
    health: 400,
    arm: 300
};

const john = {
    health: 200
};

//1 вариант - устаревший

// john.__proto__ = soldier;

// console.log(john.arm);

//2 вариант

// Object.setPrototypeOf(john, soldier);
// console.log(john.arm);

const kyle = Object.create(soldier);
console.log(kyle.arm);

kyle.arm = 150;
console.log(kyle.arm);
console.log(kyle.health);
