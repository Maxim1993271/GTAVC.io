document.addEventListener("DOMContentLoaded", function () {
    // Функция для блокировки контекстного меню (правой кнопки мыши)
    function disableContextMenuExceptButtons() {
        document.addEventListener("contextmenu", function (e) {
            // Проверяем, является ли элемент, на котором произошло событие, ссылкой с классом "btn"
            const isDownloadButton = e.target.closest("a.btn");

            // Если это не кнопка "Download", блокируем контекстное меню
            if (!isDownloadButton) {
                e.preventDefault();
            }
        });
    }

    // Функция для блокировки копирования контента
    function disableCopyContent() {
        document.addEventListener("copy", function (e) {
            alert("Копирование контента запрещено!");
            e.preventDefault();
        });
    }

    // Инициализация функций
    disableContextMenuExceptButtons();
    disableCopyContent();
});