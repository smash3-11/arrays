// Задание 1
let index = +prompt('Введите индекс')
let arr = ['Alexsey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
if (arr.includes(arr[index])) {
    arr.splice(index, 1);
    console.log(arr);
    // console.log(`Элемент ${arr[index]} удален из массива`);
} else {
    console.log(`Элемент с индексом ${index} отсутствует в массиве`);
}

// Задание 3


let arr_1 = [[{a: {price: 20}}], [{a: {price: 35}}], [{a: {price: 44}}]];

let total = [arr_1 [0][0].a.price + arr_1 [1][0].a.price + arr_1 [2][0].a.price ]

console.log(total);