//! 1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// ?1 решение
// const str = prompt("Какое официальное название JavaScript?").toUpperCase;
// if( str === 'ECMAScript' ).toUpperCase {
// alert('Верно');
// } else {
//   alert('Не знаете? ECMAScript!');
// }
 

//!2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут

// ? 2 решение 
// const minutes = prompt('Введите количе5ство минут:');

// if (minutes === null) {
//   alert('Error');
// }

// const hours = Math.floor(minutes / 60)
//   .toString()
//   .padStart(2, '0');
// const min = (minutes % 60).toString().padStart(2, '0');

// console.log(` часов ${hours}  минут ${min} `);


// !4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

//? 4 решение--//
// const userInput = prompt('Введите логин');
// console.log(userInput);

// if (userInput === 'Админ') {
//   const userPass = prompt('Введите пароль');
//   if (userPass) {
//     if (userPass === 'Я главный') {
//       console.log('Здравствуйте');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Отменено');
//   }
// } else {
//   console.log('Я вас не знаю');
// }


//! 5. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;

// ? 5. Решение --//
// const max = 50;
// const min = 23;

// let totalsum = 0;

// for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (!(i%2)) {
//         totalsum += i;
// } 
// }
// console.log(totalsum);

//!6. Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//  Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement
// const list = document.createElement("ul");
//?--решение--//
// const buttonAdd = document.createElement("button");
// buttonAdd.classList.add("btn-add");
// buttonAdd.textContent = "Добавить";

// const buttonRemove = document.createElement("buttton");
// buttonRemove.classList.add("btn-add");
// buttonRemove.textContent = "Удалить";

// const inputRef = document.createElement("input");

// const containerRef = document.querySelector(".container");
// containerRef.append(list, buttonAdd, buttonRemove, inputRef);

// buttonAdd.addEventListener("click", () => {
//   const ulItem = document.createElement("li");
//   ulItem.textContent = inputRef.value ? inputRef.value : "nothing";
//   list.append(ulItem);
//   const itemsCountRef = list.children.length;
//   ulItem.classList.add( itemsCountRef % 2 ? "odd" : "even" );
// });

// buttonRemove.addEventListener("click", () => {
//   if ( !list.lastChild) {
//     return
//   }
//   list.removeChild( list.lastChild );

// })


//! 7 условие
//2. Создать форму авторизации.
//В форме авторизации, пользователь должен ввести
//логин и пароль для входа в систему.
// - кнопка "Отправить" становится активной только в том случае
//когда заполнены оба поля и пользователь отметил чекбокс
// - поле логина должно содержать значение минимум 4 символа
// - поле пароля от 3 до 30 символов
// - если условия не соответствуют требованиям то
//при потере фокуса поле ввода показывает ошибку
// - после нажатия кнопки "Отправить" надо вывести сообщение
//об успешной авторизации

//? 7 Решение

