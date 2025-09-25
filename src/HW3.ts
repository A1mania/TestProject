// 1.Создайте переменные, затем сложите их и выведите результат в консоль разработчика.


//     let x = 20;
//     let y = 58;
//     let z = 42;
//     let sum = x+y+z;
// console.log (sum);

// Task 2 💻
// Создайте переменные:

// - количество секунд в минуте
// - количество минут в часу
// - количество часов в сутках
// - количество суток в году
// Посчитайте ваш возраст в секундах и поместите результат в переменную myAgeInSeconds

// let sec=60;
// let min=60;
// let hour=24;
// let day=365;
// let myAgeInSeconds=35*day*hour*min*sec;

// console.log(myAgeInSeconds);

// Task 3 💻
//     let count = 42
//     let userName = '42'
// Создайте две переменные. Поместите в них переменную count и превратите в строку,
//  а userName наоборот в число. Попробуйте реализовать задачу двумя разными способами.

// 1й способ

// let count = 42
// let userName = '42'
// let countNew = String(count);
// let userNameNew = Number(userName);

// console.log('countNew type is ' + typeof(countNew));
// console.log('userNameNew type is ' + typeof(userNameNew));

// 2й способ:

// let userName = '42';
// let count = 42;
// let countNew = `${count}`; 
// let userNameNew = +(userName);

// console.log('countNew type is ' + typeof(countNew));
// console.log('userNameNew type is ' + typeof(userNameNew));


// Task 4 💻
// Имеется три переменные:

//   let a = 1
//   let b = 2
//   let c = "белых медведей"
// Сложите переменные так, чтобы в результате получилось 
// выражение: 12 белых медведей и результат выведите в консоль.

//   let a = 1;
//   let b = 2;
//   let c = "белых медведей";

//   console.log(String(a)+String(b) + " " + c);


// Task 5 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:

// `Variable: %variable name% have type: %type variable%`

// let fruit = "apple";
// let fruitQty = 123;
// let inStock = true;

// console.log("Variable: fruit have type: " + typeof(fruit));
// console.log("Variable: fruitQty have type: " + typeof(fruitQty));
// console.log("Variable: inStock have type: " + typeof(inStock));

// Task 6 💻
// Создайте переменные и присвойте им значения:

//     'true'
//     false
//     17
//     undefined
//     null
// Затем с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

// let v1 = 'true';
// let v2 =  false;
// let v3 = 17;
// let v4 = undefined;
// let v5 = null;

// console.log ("v1 type: " + typeof(v1) + ",", "v2 type: " + typeof(v2) + ",", "v3 type: " + typeof(v3) + ",", "v4 type: " + typeof(v4) + ",", "v5 type: " + typeof(v5))

// Task 7 💻
// Даны две переменные:

//     let height = 15
//     let width = 20
// С помощью условий выведите в консоль разработчика наибольшее число.

// let height = 15;
// let width = 20;


// if (height>width){
// console.log(height);
// }
// else if (height<width){
//     console.log(width);
// }
// else if (height=width){
//     console.log("numbers are equal");
// }
// else {
//     console.log("insert numbers to compare");
// }

// Task 10 💻
// Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? 
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы || &&.

//     let key = true
//     let documents = true
//     let pen = true
//     let apple = false
//     let orange = true
// Ответ поместите в переменную shouldGoToWork

    // let key = true;
    // let documents = true;
    // let pen = true;
    // let apple = false;
    // let orange = true;
    // let shouldGoToWork = true;

    // if (key && documents && pen &&(apple || orange)) {
    //     console.log(shouldGoToWork);
    // }
    //     else {
    //         console.log (!shouldGoToWork);
    //     }
    
// ADVANCED level (OPTIANAL/ПО ЖЕЛАНИЮ)
// Task 1 👨‍🏫
// Поменяйте значение переменных местами не создавая дополнительной переменной:

//     let a = 4
//     let b = 3

//  let a = 4
//  let b = 3
//  a--;
//  b++;

// console.log("a = " + a + ", b = " + b);

// Task 2 👨‍🏫
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную lengthWords и посчитайте в ней длинну всех слов из списка:

// - доступ 
// - морпех
// - наледь
// - попрек
// - рубило

// let v1 = 'доступ';
// let v2 = 'морпех';
// let v3 = 'наледь';
// let v4 = 'попрек';
// let v5 = 'рубило';
// let lengthWords = v1.length+v2.length+v3.length+v4.length+v5.length

// console.log(lengthWords);