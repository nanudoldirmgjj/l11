/*
Задание 3

Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

Пример реализации:

https://ucarecdn.com/6e689f37-...



ПОДСКАЗКИ

- значение атрибута можно узнать с помощью метода element.getAttribute(' ');

- элемент, по которому пришелся клик, = 

event.target

остальные элементы - 

!event.target

Порядок работы, если нет своих идей:

1. Собираем изображения в массив.

2. Перебираем массив с изображениями, добавляем на них обработчик клика.

Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или url в память и ставим ее на фон body.

При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку.
*/


const imgs = document.querySelectorAll('img');
const full = document.getElementById('full');

if(localStorage.u) {
            imgs.forEach(item => {
                if( item.getAttribute('src') == localStorage.u ) {
                    item.classList.add('act');
                }
            })
            full.style.background = "url(" + localStorage.u + ")";

} else {
    imgs[0].classList.add('act');
    full.style.background= "url(" + imgs[0].getAttribute('src') + ")" ;
}

imgs.forEach(item => {
    item.addEventListener('click' , (event) => {
        for (let i = 0; i < imgs.length; i++){
        if (event.target == imgs[i]) {
           let src = imgs[i].getAttribute('src');
            console.log(src);
            imgs[i].classList.add('act');
         let a =  full.style.background= "url(" + src + ")" ;

            localStorage.u = (src);

        } else  imgs[i].classList.remove('act');         

    }
}) })


