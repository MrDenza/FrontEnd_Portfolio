// ------------------- Auto Close Menu --------------------
let menuClose = document.querySelector(".header__menu-box"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
menuClose.addEventListener("click", () => { // Слушатель
        setTimeout(() => { // Таймер автозакрытия меню
            menuClose.removeAttribute("open");
        }, 15000);
    }
)
// -------------------- Subscribe Form --------------------
function validate_subscribeForm() {
    let el_email = document.subscribeForm.email.value.trim(); // Удаление пробелов до и после
    if (el_email.length !== 0) { // Проверка поля Email
        if (el_email.length <= 50) {
            if ((el_email.length >= 5) && (el_email.indexOf("@") !== -1) && (el_email.indexOf(".") !== -1)) {
                console.log("Ваше сообщение отправлено!");
                document.querySelector(".pb-subscribe__form-btn").classList.add("done"); // ВВЕСТИ НАЗВАНИЕ СЕЛЕКТОРА КНОПКИ!!!
                setTimeout(() => { // Таймер для анимации кнопки отправки
                    document.querySelector(".pb-subscribe__form-btn").classList.remove("done"); // ВВЕСТИ НАЗВАНИЕ СЕЛЕКТОРА КНОПКИ!!!
                }, 5000);
            }
            else {
                alert("Incorrect format for filling in the input field: Your Email! Check that the input is correct.\n\n" +
                    "The input field must be at least 5 characters long, and also contain the characters \".\" and \"@\".\n\n" +
                    "Example: user@mail.com");
                console.log("Неправильный формат заполнения поля ввода: Your Email");
            }
        }
        else {
            alert("There are many characters entered in the \"Your email\" field!\nMaximum of 50 characters.");
            console.log("Поле email введено много символов (max = 50).");
        }
    }
    else {
        alert("The field is empty! Enter your email address.");
        console.log("Поле email пустое! Введите ваш адрес почты.");
    }
    return false; // false - принудительный запрет отправки формы
}
// ----------------------- View More ----------------------
let post_el = document.getElementsByClassName("post-view"); // ВВЕСТИ НАЗВАНИЕ СЕЛЕКТОРА
let post_num = 6; // Сколько выводить в первый шаг
window.onload = function() { // Выполнение кода при запуске страницы
    visible_post(0);
};
function visible_post(multiplier_view) { // Отображение нужных блоков в количестве post_num
    let items = post_el[0].getElementsByTagName("a"); // ОТСЛЕЖИВАЕМЫЕ ОБЪЕКТЫ
    let num = 0;
    post_num = post_num + (6 * multiplier_view); // Количество отображаемых блоков
    for (let i=0; i < items.length; i++) { // Перебираем массив с блоками
        num++;
        if (num <= post_num) {
            items[i].style.display = 'flex'; // Показать блоки в нужном количестве
        }
        else {
            items[i].style.display = 'none'; // Остальные скрыть
        }
    }
}




