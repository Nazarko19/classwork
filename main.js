


// --створити масив з:
 // - та вивести його в консоль
 //     - з 5 числових значень
 let first =[1,2,3,4,5,]

 // - з 5 стічкових значень
let first2 =['hi','yes','no','good', 'bad']
 // - з 5 значень стрічкового, числового та булевого типу
let first3 =[5<6,true,false,'nice', 8]
console.log(first)
console.log(first2)
console.log(first3);

 // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

 let too = []
too[4]= 'hi'
too[10]= 13;
console.log(too);



// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 for (i=0; i<10;i++){
    document.write(`<div>hi</div>`)
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i=0; i<10;i++) {
 document.write(`<div>hi${i}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let a =0
while (a<20){
    document.write(`<h2>hello</h2>`)
    a++
}
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let o =0
while (o<20) {
    document.write(`<h2>hello${o}</h2>`)
    o++
}

 // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
 // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
 // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
 // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 let mns = [1,2,3,4,5,6,7,8,9,10]
 for (mn of mns){
     console.log(mn);
 }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
 let hjs =['q','f', 'w','e','r','t','y','u','i','o']
 for (hj of hjs){
     console.log(hj)
 }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let io =[1,2,3,'q','f', 'w','e',true,false,7>6,]
for (i=0;i<io.length;i++){
    console.log(io[i]);
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
 let pos =[1,2,3,'q','f', 'w','e',true,false,7>6,]
for (p=0;p<pos.length;p++){
    if (typeof pos[p] ===`boolean`){
        console.log(pos[p])
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (p=0;p<pos.length;p++){
    if (typeof pos[p]===`number`){
        console.log(pos[p])
    }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
}
for (p=0;p<pos.length;p++){
    if (typeof pos[p]==="string"){
        console.log(pos[p])
    }
}



 // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.


 // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 //  // // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 //  // // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
 //  // // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 //  // // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
 let five = [];
 five[0]='hi'
 five[1]='nice'
 five[2]='good'
 five[3]=  7
 five[4]=10
 five[5]= true
 five[6]= false
 five[7]= 3
 five[8]= 'hello'
 five[9]= 'cool'
 console.log(five);


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 for(let n=0;n<10;n++) {
     document.write(`<div>${n}</div>`)
     console.log(n);
 }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.
 for (let i=0;i<100;i++){
     document.write(`<div>${i}</div>`)
     console.log(i);
 }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
 for (let i=0;i<100;i+=2){
     document.write(`<div>${i}</div>`)
     console.log(i);
 }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
 for (let i=0;i<100;i++){
     if (i%2 === 0){
         console.log(i);
         document.write(`<div>${i}</div>`);
     }
 }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
 for (let i=0;i<100;i++){
     if (i%2 !== 0){
         document.write(`<div>${i}</div>`);
         console.log(i)
     }
 }

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

 let usersWithId = [
     {id: 1, name: 'vasya', age: 31, status: false},
     {id: 2, name: 'petya', age: 30, status: true},
     {id: 3, name: 'kolya', age: 29, status: true},
     {id: 4, name: 'olya', age: 28, status: false}
 ];

 let citiesWithId = [
     {user_id: 3, country: 'USA', city: 'Portland'},
     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
     {user_id: 2, country: 'Poland', city: 'Krakow'},
     {user_id: 4, country: 'USA', city: 'Miami'}
 ];

 for (const user of usersWithId) {
     for (const citys of citiesWithId) {
         if(user.id === citys.user_id){
             user.address = citys
         }
     }
     console.log(user);
 }

