// ------------------- Auto Close Menu --------------------
let menuClose = document.querySelector(".header__menu-box"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
menuClose.addEventListener("click", () => { // Слушатель
        setTimeout(() => { // Таймер автозакрытия меню
            menuClose.removeAttribute("open");
        }, 15000);
    }
)
// --------------------- Contact Form ---------------------
function validate_feedbackForm() {
    let el_email = document.feedbackForm.email.value.trim(); // Удаление пробелов до и после
    let el_list = document.feedbackForm.subject.value;
    let el_sms = document.feedbackForm.text.value.trim(); // Удаление пробелов до и после
    if (el_email.length !== 0) { // Проверка поля Email
        if ((el_email.length >= 5) && (el_email.indexOf("@") !== -1) && (el_email.indexOf(".") !== -1)) {
            if (el_list.length >= 1) { // Проверка выбранной позиции в списке
                if (el_sms.length !== 0) { // Проверка поля сообщения
                    if (el_sms.length >= 10) {
                        if (el_sms.length <= 100) {
                            console.log("Ваше сообщение отправлено!");
                            document.querySelector(".pc-form__form-btn").classList.add("done"); // ВВЕСТИ НАЗВАНИЕ СЕЛЕКТОРА КНОПКИ!!!
                            setTimeout(() => { // Таймер для анимации кнопки отправки
                                document.querySelector(".pc-form__form-btn").classList.remove("done"); // ВВЕСТИ НАЗВАНИЕ СЕЛЕКТОРА КНОПКИ!!!
                            }, 5000);
                        }
                        else {
                            alert("Your message contains a lot of characters!\nThe character limit is from 10 to 100 characters.\n\n" +
                                "Character limit: "+ el_sms.length +"/100");
                            console.log("В поле сообщения введено много символов (max = 100).");
                        }
                    }
                    else {
                        alert("Your message contains few characters!\nThe character limit is from 10 to 100 characters.\n\n" +
                            "Character limit: "+ el_sms.length +" / 10");
                        console.log("В поле сообщения не введено минимальное количество символов (min = 10).");
                    }
                }
                else {
                    alert("The message field is empty! Enter your message.\n\n" +
                        "Your message should consist of 10 to 100 characters.");
                    console.log("Поле сообщения пустое! Введите ваше сообщение.");
                }
            }
            else {
                alert("The subject of the message is not selected!\nSelect the subject of the message from the list.\n\n" +
                    "Available themes: Design / Development / Marketing / Other.");
                console.log("Не выбрана тема сообщения! Выберите тему сообщения из списка.");
            }
        }
        else {
            alert("Incorrect format for filling in the input field: Your Email!\nCheck that the input is correct.\n\n" +
                "The input field must be at least 5 characters long, and also contain the characters \".\" and \"@\".\n\n" +
                "Example: user@mail.com");
            console.log("Неправильный формат заполнения поля ввода: Your Email");
        }
    }
    else {
        alert("The field is empty! Enter your email address.");
        console.log("Поле email пустое! Введите ваш адрес почты.");
    }
    return false; // false - принудительный запрет отправки формы
}
// -------------------- Check Details ---------------------
const details = document.querySelectorAll("details"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
// Отслеживание нажатия на какой-то из details перебором массива о details
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => { // Слушатель
        // Закрыть все details по которым не произошло событие click
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});