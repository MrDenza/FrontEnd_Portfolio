// ------------------- Auto Close Menu --------------------
let menuClose = document.querySelector(".header__menu-box"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
menuClose.addEventListener("click", () => { // Слушатель
        setTimeout(() => { // Таймер автозакрытия меню
            menuClose.removeAttribute("open");
        }, 15000);
    }
)
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