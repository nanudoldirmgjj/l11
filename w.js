/*
Задание 1

1) Задать объект с полем name. 
Задать переменную, которая будет хранить JSON упомянутого объекта. 
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
*/
let o = {name: "j"};
let so = JSON.stringify(o);
let po = JSON.parse(so);

/*
2)

Создать переменную user, в которой хранится объект. 
Записать переменную в localStorage. 
Создать переменную newUser, в которой будет храниться JS объект из localStorage.
*/
let user = {a: "00"};
localStorage.user = JSON.stringify(user);
let resu = JSON.parse(localStorage.user);


/*
Задание 2

1) Добавить в таск-мееджер кнопку, которая помечает все задачи как сделанные.


- Добавить тег button в html код и повесить на него обработчик события click
- В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
- В цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';

2) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.
Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.
Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода.
*/


let tasks = [];
if (localStorage.tasks) { 
  tasks = JSON. parse(localStorage.tasks);
}

for (let task of tasks) {
let li = document.createElement('li');
li.innerText = task;
let ul = document.querySelector('ul');
ul.appendChild(li);
}
let textInput = document.querySelector("input");
 let form = document.querySelector("form");
form.style.display = "inline-block";
 const b = document.getElementById('b');
 b.onclick = () => {
    
 }
  form.addEventListener("submit", function (event) { event.preventDefault();
tasks.push(textInput.value); 
localStorage.tasks = JSON.stringify(tasks);
let ul = document.querySelector("ul");
let li = document.createElement("li");
 li.textContent = textInput.value;
textInput.value = " ";
ul.appendChild(li);
});

const od = document.getElementById('o');
od.style.display = "inline-block";
let mi;
od.onclick = () => {
     mi = document.querySelectorAll('li');
    mi.forEach ((Element) =>{
Element.style.textDecoration = 'line-through';
    })

    // for (let i = 0; i < mi.length; i++) {
    //     mi[i].style.textDecoration =  'line-through';
    // }
}