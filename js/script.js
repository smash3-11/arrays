// Задание 1
let index = +prompt()
let arr = ['Alexsey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
if (arr.includes(arr[index])) {
    arr.splice(index, 0);
    console.log(`Элемент ${arr[index]} удален из массива`);
} else {
    console.log(`Элемент с индексом ${index} отсутствует в массиве`);
}

// Задание 2

// let arr_1 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]


// if (arr_1.typeof(arr_1) >= Array(5)) {
//     console.log("Good");
// } else {
//     console.log("bad");    
// }
// // console.log(typeof(arr_1));
// // typeof(arr_1) >= [+prompt()]
// // console.log(Array);
// Задание 3


// let arr_1 = [[{a :{price: 20}}][{a: {price: 35}}][{a: {price: 44}}]]
// console.log(arr_1);