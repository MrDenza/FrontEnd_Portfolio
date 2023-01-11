// ------------------- Auto Close Menu --------------------
let menuClose = document.querySelector(".header__menu-box"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
menuClose.addEventListener("click", () => { // Слушатель
        setTimeout(() => { // Таймер автозакрытия меню
            menuClose.removeAttribute("open");
        }, 15000);
    }
)
// ------------------------ Filter ------------------------
let filter_el = document.getElementById('filter'); // УКАЗАТЬ ИД БОКСА
let items_el = document.getElementsByClassName('post-item'); // УКАЗАТЬ КЛАСС БЛОКОВ
let items_num = 9; // Сколько выводить в первый шаг
let filter_point = 'pp-block__list-point'; // Начальное значение при загрузке страницы
window.onload = function() { // Выполнение кода при запуске страницы
    visible_block(filter_point,0,1);
};
filter_el.onchange = function () { // Фокус списка select
    visible_block(this.value, 0, 1);
};
function visible_block(block, multiplier,reset) { // Отображение нужных блоков в количестве items_num
    let items = items_el[0].getElementsByTagName('li'); // УКАЗАТЬ ЧТО ЗА ЭЛЕМЕНТ
    let num = 0;
    items_num = items_num + (9 * multiplier); // Количество отображаемых блоков
    if (reset === 1){
        items_num = 9;
    }
    filter_point = block;
    console.log('Выбран пункт:', block);
    for (let i=0; i<items.length; i++) { // Перебираем массив с блоками
        if (items[i].classList.contains(block)) {
            num++;
            if (num <= items_num){
                items[i].style.display = 'flex'; // Показать блоки в нужном количестве
            }
            else {
                items[i].style.display = 'none'; // Все остальные скрыть
            }
        }
        else {
            items[i].style.display = 'none';
        }
    }
}