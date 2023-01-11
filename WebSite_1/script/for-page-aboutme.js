// ------------------- Auto Close Menu --------------------
let menuClose = document.querySelector(".header__menu-box"); // ОТСЛЕЖИВАЕМЫЙ ОБЪЕКТ
menuClose.addEventListener("click", () => { // Слушатель
        setTimeout(() => { // Таймер автозакрытия меню
            menuClose.removeAttribute("open");
        }, 15000);
    }
)
// ------------------ Preview for Video -------------------
function videoPrev() { // Смена превью картинки на блок видео
    document.querySelector('.pa-video__preview').style.display='none'; // НАЗВАНИЕ СЕЛЕКТОРА КАРТИНКИ
    document.querySelector('.pa-video__video').style.display='block'; // НАЗВАНИЕ СЕЛЕКТОРА ВИДЕО
}

